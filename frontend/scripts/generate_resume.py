from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "frontend" / "public" / "Samaksh-Rastogi-Resume.pdf"

NAVY = colors.HexColor("#0F172A")
DARK = colors.HexColor("#1E293B")
INDIGO = colors.HexColor("#4F46E5")
SLATE = colors.HexColor("#334155")
MUTED = colors.HexColor("#64748B")
BORDER = colors.HexColor("#CBD5E1")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", fontName="Helvetica-Bold", fontSize=22, leading=26, textColor=NAVY, alignment=TA_CENTER, spaceAfter=2))
styles.add(ParagraphStyle(name="TitleRole", fontName="Helvetica", fontSize=11, leading=15, textColor=DARK, alignment=TA_CENTER, spaceAfter=4))
styles.add(ParagraphStyle(name="ContactLine", fontName="Helvetica", fontSize=8.5, leading=12, textColor=SLATE, alignment=TA_CENTER))
styles.add(ParagraphStyle(name="SectionHead", fontName="Helvetica-Bold", fontSize=10.5, leading=14, textColor=NAVY, spaceBefore=7, spaceAfter=2))
styles.add(ParagraphStyle(name="OverviewText", fontName="Helvetica", fontSize=8.4, leading=11.8, textColor=SLATE))
styles.add(ParagraphStyle(name="SkillKey", fontName="Helvetica-Bold", fontSize=8.5, leading=12, textColor=DARK))
styles.add(ParagraphStyle(name="SkillVal", fontName="Helvetica", fontSize=8.5, leading=12, textColor=SLATE))
styles.add(ParagraphStyle(name="JobTitle", fontName="Helvetica-Bold", fontSize=9.5, leading=13, textColor=DARK))
styles.add(ParagraphStyle(name="JobDate", fontName="Helvetica", fontSize=8.5, leading=13, textColor=SLATE, alignment=TA_RIGHT))
styles.add(ParagraphStyle(name="JobLocation", fontName="Helvetica", fontSize=8.5, leading=12, textColor=SLATE, alignment=TA_RIGHT))
styles.add(ParagraphStyle(name="BulletText", fontName="Helvetica", fontSize=8.2, leading=11.4, textColor=SLATE, leftIndent=12, firstLineIndent=-8, spaceAfter=2))


def section_divider(title):
    return [
        Paragraph(title.upper(), styles["SectionHead"]),
        Table([[""]], colWidths=[178 * mm], rowHeights=[0.6 * mm], style=[
            ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#0F172A")),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ]),
        Spacer(1, 2 * mm),
    ]


def bullet(text):
    return Paragraph(f"&bull;&nbsp; {text}", styles["BulletText"])


doc = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=A4,
    leftMargin=16 * mm,
    rightMargin=16 * mm,
    topMargin=14 * mm,
    bottomMargin=14 * mm,
    title="Samaksh Rastogi Resume",
    author="Samaksh Rastogi",
)

story = []

# HEADER
story.append(Paragraph("Samaksh Rastogi", styles["Name"]))
story.append(Paragraph("Software Engineer | Full Stack & Backend Developer", styles["TitleRole"]))
contact_html = (
    '<font color="#4F46E5">LinkedIn</font> &nbsp;|&nbsp; '
    '<font color="#4F46E5">Portfolio</font> &nbsp;|&nbsp; '
    '<font color="#4F46E5">GitHub</font> &nbsp;|&nbsp; '
    'samakshrastogi885@gmail.com &nbsp;|&nbsp; +918299305586 &nbsp;|&nbsp; Gurugram'
)
story.append(Paragraph(contact_html, styles["ContactLine"]))
story.append(Spacer(1, 3.5 * mm))

# OVERVIEW
story.extend(section_divider("OVERVIEW"))
overview_p = (
    "B.Tech Information Technology graduate (2026) with 11 months of Software Engineering internship experience at "
    "Nokia, contributing to enterprise-scale applications and backend systems. Skilled in Python, Django REST Framework, "
    "Node.js, TypeScript, and SQL, with hands-on experience in REST API development, workflow automation, secure "
    "authentication, and data processing. Strong foundation in backend architecture and scalable software development, "
    "with a keen interest in building AI/ML-driven applications."
)
story.append(Paragraph(overview_p, styles["OverviewText"]))
story.append(Spacer(1, 2 * mm))

# SKILLS
story.extend(section_divider("SKILLS"))
skills_data = [
    [Paragraph("<b>Programming Languages:</b>", styles["SkillKey"]), Paragraph("Python, TypeScript, JavaScript, SQL", styles["SkillVal"])],
    [Paragraph("<b>Backend &amp; APIs:</b>", styles["SkillKey"]), Paragraph("Django, Django REST Framework (DRF), Node.js, Express.js, RESTful APIs", styles["SkillVal"])],
    [Paragraph("<b>Databases &amp; Caching:</b>", styles["SkillKey"]), Paragraph("MongoDB, Redis, SQLite", styles["SkillVal"])],
    [Paragraph("<b>Frontend Technologies:</b>", styles["SkillKey"]), Paragraph("React.js, Vite, Tailwind CSS, HTML5, CSS3", styles["SkillVal"])],
    [Paragraph("<b>Engineering &amp; Automation:</b>", styles["SkillKey"]), Paragraph("Workflow Automation, Background Job Processing, Data Processing, JWT Authentication, Role-Based Access Control (RBAC), Google OAuth", styles["SkillVal"])],
]
skills_table = Table(skills_data, colWidths=[48 * mm, 130 * mm])
skills_table.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ("TOPPADDING", (0, 0), (-1, -1), 1.2),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 1.2),
]))
story.append(skills_table)
story.append(Spacer(1, 2.5 * mm))

# PROFESSIONAL EXPERIENCE
story.extend(section_divider("PROFESSIONAL EXPERIENCE"))
exp_header = Table([
    [
        Paragraph("<b>Nokia Solutions and Networks India Pvt. Ltd.</b>, <i>Software Engineering Intern</i>", styles["JobTitle"]),
        Paragraph("08/2025 &ndash; 06/2026", styles["JobDate"]),
    ],
    [
        Paragraph("", styles["JobTitle"]),
        Paragraph("Gurugram, India", styles["JobLocation"]),
    ]
], colWidths=[130 * mm, 48 * mm])
exp_header.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ("TOPPADDING", (0, 0), (-1, -1), 0.5),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 0.5),
]))
story.append(exp_header)
story.append(Spacer(1, 1 * mm))
story.append(bullet("Developed Python and Django REST Framework (DRF) backend services and REST APIs for enterprise platforms supporting network operations, issue management, and media management."))
story.append(bullet("Implemented secure authentication, Role-Based Access Control (RBAC), approval workflows, and automated notifications to support controlled access and operational processes."))
story.append(bullet("Built data-processing workflows, analytics dashboards, and reporting modules to improve operational visibility, issue tracking, and internal productivity."))
story.append(bullet("Contributed to enterprise application architecture and backend integration across internal support and operational systems."))
story.append(Spacer(1, 2.5 * mm))

# PROJECTS
story.extend(section_divider("PROJECTS"))
proj_header = Table([
    [
        Paragraph("<b>SK Control</b>, <i>AI Agent Orchestration &amp; Automation Platform</i>", styles["JobTitle"]),
        Paragraph("11/2026 &ndash; Present", styles["JobDate"]),
    ]
], colWidths=[130 * mm, 48 * mm])
proj_header.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ("TOPPADDING", (0, 0), (-1, -1), 0.5),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 0.5),
]))
story.append(proj_header)
story.append(Spacer(1, 1 * mm))
story.append(bullet("Designed and developed a centralized web platform for managing three specialized AI-powered workspaces, focused on content automation, website diagnostics, and digital marketing."))
story.append(bullet("<b>Shorts Studio &mdash; AI Video Generation:</b> Developing AI-assisted video processing workflows to convert long-form videos into short clips using intelligent highlight identification and smart framing."))
story.append(bullet("<b>Web Engine &mdash; Website Testing &amp; Diagnostics:</b> Building automated website analysis workflows to evaluate performance, cross-device responsiveness, and user experience."))
story.append(bullet("<b>Growth Engine &mdash; AI Marketing &amp; Campaigns:</b> Developing AI-powered workflows for marketing campaign creation, persuasive content generation, and customer acquisition strategies."))
story.append(Spacer(1, 2.5 * mm))

# EDUCATION
story.extend(section_divider("EDUCATION"))
edu_header = Table([
    [
        Paragraph("<b>Bachelor of Technology in Information Technology</b>,<br/><font color='#334155'>Chandigarh Engineering College, CGC Landran</font>", styles["JobTitle"]),
        Paragraph("08/2022 &ndash; 06/2026<br/><font color='#334155'>Punjab INDIA</font>", styles["JobDate"]),
    ]
], colWidths=[130 * mm, 48 * mm])
edu_header.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ("TOPPADDING", (0, 0), (-1, -1), 0.5),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 0.5),
]))
story.append(edu_header)
story.append(Spacer(1, 1 * mm))
story.append(bullet("<b>CGPA: 8.04/10</b>"))

doc.build(story)
print("SUCCESS:", OUTPUT)
