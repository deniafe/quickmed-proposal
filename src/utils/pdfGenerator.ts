import jsPDF from "jspdf";
import { Package, CostBreakdownItem } from "../components/types";

interface PaymentPhase {
  phase: string;
  amount: string;
  percent: string;
  milestone: string;
}

interface PDFData {
  selectedPackage: Package;
  costBreakdown: CostBreakdownItem[];
  paymentStructure: PaymentPhase[];
}

interface TextOptions {
  fontSize?: number;
  maxWidth?: number;
  lineHeight?: number;
  fontStyle?: string;
  marginBottom?: number;
}

export const generateProposalPDF = async (data: PDFData) => {
  const { selectedPackage, costBreakdown, paymentStructure } = data;

  // Create new PDF document
  const pdf = new jsPDF("p", "mm", "a4");
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;

  let yPosition = margin;

  // Helper function to add new page if needed
  const checkPageBreak = (requiredHeight: number) => {
    if (yPosition + requiredHeight > pageHeight - margin) {
      pdf.addPage();
      yPosition = margin;
    }
  };

  // Helper function to add text with word wrap
  const addText = (
    text: string,
    x: number,
    _y: number,
    options: TextOptions = {}
  ) => {
    const fontSize = options.fontSize || 10;
    const maxWidth = options.maxWidth || contentWidth;
    const lineHeight = options.lineHeight || fontSize * 0.4;

    pdf.setFontSize(fontSize);
    if (options.fontStyle) pdf.setFont("helvetica", options.fontStyle);

    const lines = pdf.splitTextToSize(text, maxWidth);

    checkPageBreak(lines.length * lineHeight);

    lines.forEach((line: string, index: number) => {
      pdf.text(line, x, yPosition + index * lineHeight);
    });

    yPosition += lines.length * lineHeight + (options.marginBottom || 5);

    // Reset font
    pdf.setFont("helvetica", "normal");
  };

  // Header
  pdf.setFillColor(59, 130, 246); // Blue color
  pdf.rect(0, 0, pageWidth, 40, "F");

  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(24);
  pdf.setFont("helvetica", "bold");
  pdf.text("QuickMed Development Proposal", margin, 25);

  pdf.setFontSize(12);
  pdf.setFont("helvetica", "normal");
  pdf.text(`${selectedPackage.name} - ${selectedPackage.price}`, margin, 35);

  yPosition = 50;
  pdf.setTextColor(0, 0, 0);

  // Executive Summary
  addText("EXECUTIVE SUMMARY", margin, yPosition, {
    fontSize: 16,
    fontStyle: "bold",
    marginBottom: 10,
  });

  addText(
    "QuickMed is a comprehensive 4-app ecosystem designed to revolutionize pharmaceutical delivery in Nigeria. This proposal outlines the development of a complete platform including User App, Pharmacy Partner App, Rider App, and Admin Dashboard.",
    margin,
    yPosition,
    { fontSize: 11, marginBottom: 15 }
  );

  // Package Details
  addText("SELECTED PACKAGE", margin, yPosition, {
    fontSize: 16,
    fontStyle: "bold",
    marginBottom: 10,
  });

  addText(`Package: ${selectedPackage.name}`, margin, yPosition, {
    fontSize: 12,
    fontStyle: "bold",
    marginBottom: 5,
  });

  addText(`Investment: ${selectedPackage.price}`, margin, yPosition, {
    fontSize: 12,
    fontStyle: "bold",
    marginBottom: 5,
  });

  addText(`Timeline: ${selectedPackage.timeline}`, margin, yPosition, {
    fontSize: 12,
    marginBottom: 5,
  });

  addText(`Description: ${selectedPackage.description}`, margin, yPosition, {
    fontSize: 11,
    marginBottom: 5,
  });

  addText(`Best For: ${selectedPackage.bestFor}`, margin, yPosition, {
    fontSize: 11,
    marginBottom: 15,
  });

  // Cost Breakdown
  addText("COST BREAKDOWN", margin, yPosition, {
    fontSize: 16,
    fontStyle: "bold",
    marginBottom: 10,
  });

  costBreakdown.forEach((item) => {
    checkPageBreak(15);

    // Item name
    pdf.setFontSize(11);
    pdf.text(item.item, margin, yPosition);

    // Cost (right aligned)
    pdf.setFont("helvetica", "bold");
    const costWidth = pdf.getTextWidth(item.cost);
    pdf.text(item.cost, pageWidth - margin - costWidth, yPosition);
    pdf.setFont("helvetica", "normal");

    yPosition += 8;
  });

  // Total line
  checkPageBreak(15);
  pdf.setDrawColor(0, 0, 0);
  pdf.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 8;

  pdf.setFontSize(12);
  pdf.setFont("helvetica", "bold");
  pdf.text("TOTAL PROJECT COST", margin, yPosition);
  const totalWidth = pdf.getTextWidth(selectedPackage.price);
  pdf.text(selectedPackage.price, pageWidth - margin - totalWidth, yPosition);
  pdf.setFont("helvetica", "normal");
  yPosition += 20;

  // Payment Structure
  addText("PAYMENT STRUCTURE", margin, yPosition, {
    fontSize: 16,
    fontStyle: "bold",
    marginBottom: 10,
  });

  paymentStructure.forEach((phase) => {
    checkPageBreak(25);

    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.text(`${phase.phase} (${phase.percent})`, margin, yPosition);

    const amountWidth = pdf.getTextWidth(phase.amount);
    pdf.text(phase.amount, pageWidth - margin - amountWidth, yPosition);

    yPosition += 8;

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.text(phase.milestone, margin + 5, yPosition);

    yPosition += 15;
  });

  // Key Features Summary
  addText("KEY FEATURES INCLUDED", margin, yPosition, {
    fontSize: 16,
    fontStyle: "bold",
    marginBottom: 10,
  });

  const keyFeatures = [
    "• Complete 4-app ecosystem (User, Pharmacy, Rider, Admin)",
    "• Real-time order tracking and delivery management",
    "• Secure payment processing with multiple gateways",
    "• Comprehensive inventory management for pharmacies",
    "• Advanced search and filtering capabilities",
    "• Push notifications and SMS alerts",
    "• Analytics dashboard and reporting tools",
    "• Full source code ownership upon completion",
    "• 90-day post-launch bug fix warranty",
    "• Training and documentation included",
  ];

  keyFeatures.forEach((feature) => {
    addText(feature, margin, yPosition, { fontSize: 11, marginBottom: 5 });
  });

  // Terms & Conditions
  addText("TERMS & CONDITIONS", margin, yPosition, {
    fontSize: 16,
    fontStyle: "bold",
    marginBottom: 10,
  });

  const terms = [
    "• Payment: 7-phase structure: 15% each for first 6 phases, 10% final payment upon publication",
    "• Source Code: Full ownership transferred to client upon final payment",
    `• Timeline: ${selectedPackage.timeline} from contract signing`,
    "• Revisions: Up to 3 rounds of revisions included in each phase",
    "• Support: Post-launch support included based on selected package",
    "• Hosting: First 3 months included, client responsible for ongoing costs",
    "• Training: Online training sessions included for admin and pharmacy staff",
    "• Warranty: 90-day bug fix warranty after final delivery",
  ];

  terms.forEach((term) => {
    addText(term, margin, yPosition, { fontSize: 10, marginBottom: 4 });
  });

  // Contact Information
  checkPageBreak(30);
  yPosition += 10;

  addText("CONTACT INFORMATION", margin, yPosition, {
    fontSize: 16,
    fontStyle: "bold",
    marginBottom: 10,
  });

  addText("Email: deniafe@gmail.com", margin, yPosition, {
    fontSize: 12,
    marginBottom: 5,
  });

  addText(
    "This proposal is valid for 30 days from the date of issue.",
    margin,
    yPosition,
    {
      fontSize: 10,
      marginBottom: 10,
    }
  );

  // Footer
  const footerY = pageHeight - 15;
  pdf.setFontSize(8);
  pdf.setTextColor(128, 128, 128);
  pdf.text(
    "© 2024 QuickMed Development Team. All rights reserved.",
    margin,
    footerY
  );

  const dateText = `Generated on ${new Date().toLocaleDateString()}`;
  const dateWidth = pdf.getTextWidth(dateText);
  pdf.text(dateText, pageWidth - margin - dateWidth, footerY);

  // Save the PDF
  const fileName = `QuickMed_${selectedPackage.name.replace(
    " ",
    "_"
  )}_Proposal.pdf`;
  pdf.save(fileName);
};
