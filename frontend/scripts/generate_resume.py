from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak

ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "frontend" / "public" / "Samaksh-Rastogi-Resume.pdf"

NAVY = colors.HexColor("#0F172A")
INDIGO = colors.HexColor("#4F46E5")
SLATE = colors.HexColor("#475569")
MUTED = colors.HexColor("#64748B")
LIGHT = colors.HexColor("#F8FAFC")
BORDER = colors.HexColor("#E2E8F0")
GREEN = colors.HexColor("#047857")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="ResumeName", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=25, leading=29, textColor=NAVY, alignment=TA_CENTER, spaceAfter=4))
styles.add(ParagraphStyle(name="ResumeRole", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10.5, leading=14, textColor=INDIGO, alignment=TA_CENTER, spaceAfter=5))
styles.add(ParagraphStyle(name="Contact", parent=styles["Normal"], fontSize=8.4, leading=12, textColor=SLATE, alignment=TA_CENTER))
styles.add(ParagraphStyle(name="Section", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=NAVY, spaceBefore=9, spaceAfter=5, borderWidth=0, borderColor=BORDER, borderPadding=0))
styles.add(ParagraphStyle(name="Body", parent=styles["BodyText"], fontSize=8.8, leading=12.4, textColor=SLATE, spaceAfter=3))
styles.add(ParagraphStyle(name="Job", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=9.5, leading=12, textColor=NAVY))
styles.add(ParagraphStyle(name="Meta", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=8, leading=11, textColor=INDIGO))
styles.add(ParagraphStyle(name="ResumeBullet", parent=styles["BodyText"], fontSize=8.5, leading=11.7, leftIndent=10, firstLineIndent=-7, textColor=SLATE, bulletIndent=0, spaceAfter=2))
styles.add(ParagraphStyle(name="Project", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=NAVY, spaceAfter=2))
styles.add(ParagraphStyle(name="SkillLabel", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=8.5, leading=12, textColor=NAVY))
styles.add(ParagraphStyle(name="SkillText", parent=styles["BodyText"], fontSize=8.4, leading=12, textColor=SLATE))
styles.add(ParagraphStyle(name="Footer", parent=styles["Normal"], fontSize=7, leading=9, textColor=MUTED, alignment=TA_CENTER))


def rule():
    table = Table([[""]], colWidths=[176 * mm], rowHeights=[0.5 * mm])
    table.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), BORDER), ("LINEBELOW", (0, 0), (-1, -1), 0.5, BORDER)]))
    return table


def section(title):
    return [Paragraph(title.upper(), styles["Section"]), rule(), Spacer(1, 2.5 * mm)]


def bullet(text):
    return Paragraph(f"- {text}", styles["ResumeBullet"])


def header_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(BORDER)
    canvas.setLineWidth(0.4)
    canvas.line(18 * mm, 13 * mm, 192 * mm, 13 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7)
    canvas.drawString(18 * mm, 8.5 * mm, "Samaksh Rastogi - Full-Stack and AI Systems Engineer")
    canvas.drawRightString(192 * mm, 8.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


def job_block(title, dates, subtitle, bullets):
    rows = [[Paragraph(title, styles["Job"]), Paragraph(dates, ParagraphStyle(name=f"dates-{title}", parent=styles["Meta"], alignment=2))]]
    table = Table(rows, colWidths=[126 * mm, 50 * mm])
    table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0)]))
    content = [table, Paragraph(subtitle, styles["Meta"]), Spacer(1, 1.3 * mm)]
    content.extend(bullet(item) for item in bullets)
    content.append(Spacer(1, 2 * mm))
    return KeepTogether(content)


def project_block(name, category, description, stack):
    return KeepTogether([
        Paragraph(f"{name} <font color='#64748B'>| {category}</font>", styles["Project"]),
        Paragraph(description, styles["Body"]),
        Paragraph(f"<b>Stack:</b> {stack}", styles["SkillText"]),
        Spacer(1, 2.2 * mm),
    ])


doc = BaseDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=17 * mm, leftMargin=17 * mm, topMargin=14 * mm, bottomMargin=17 * mm, title="Samaksh Rastogi Resume", author="Samaksh Rastogi", subject="Full-Stack Developer, Backend Engineer and AI Systems Builder")
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="resume")
doc.addPageTemplates([PageTemplate(id="resume", frames=[frame], onPage=header_footer)])

story = [
    Paragraph("Samaksh Rastogi", styles["ResumeName"]),
    Paragraph("FULL-STACK DEVELOPER  |  BACKEND ENGINEER  |  AI SYSTEMS BUILDER", styles["ResumeRole"]),
    Paragraph("Gurugram, India  |  +91 8299305586  |  samakshrastogi885@gmail.com", styles["Contact"]),
    Paragraph("github.com/samakshrastogi  |  linkedin.com/in/samaksh-rastogi-9638b9254  |  www.sk-hub.in", styles["Contact"]),
    Spacer(1, 4 * mm),
]
story += section("Professional Summary")
story += [Paragraph("Full-stack and backend engineer with hands-on experience delivering production systems at Nokia and building an integrated suite of SK products. Strong in Django, Node.js, TypeScript, React, REST APIs, MongoDB, Redis, realtime communication, AI workflows, media processing, analytics, authentication, and cloud delivery. Focused on secure architecture, maintainable code, measurable product outcomes, and reliable user experiences.", styles["Body"])]

story += section("Core Competencies")
competencies = [
    ["Backend Engineering", "Python, Django, Django REST Framework, Node.js, Express, REST APIs"],
    ["Frontend Engineering", "React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, responsive UI"],
    ["Data and Realtime", "MongoDB, PostgreSQL, SQLite, Redis, Socket.IO, SSE, BullMQ"],
    ["AI and Media", "LangChain, LangGraph, LLM workflows, Whisper, OpenCV, FFmpeg, analytics"],
    ["Cloud and Security", "AWS S3, CloudFront, Vercel, Render, SSO, RBAC, encryption, audit workflows"],
]
comp_table = Table([[Paragraph(label, styles["SkillLabel"]), Paragraph(value, styles["SkillText"])] for label, value in competencies], colWidths=[39 * mm, 137 * mm], hAlign="LEFT")
comp_table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("BACKGROUND", (0, 0), (-1, -1), LIGHT), ("BOX", (0, 0), (-1, -1), 0.5, BORDER), ("INNERGRID", (0, 0), (-1, -1), 0.25, BORDER), ("LEFTPADDING", (0, 0), (-1, -1), 6), ("RIGHTPADDING", (0, 0), (-1, -1), 6), ("TOPPADDING", (0, 0), (-1, -1), 5), ("BOTTOMPADDING", (0, 0), (-1, -1), 5)]))
story += [comp_table]

story += section("Professional Experience")
story += [job_block(
    "Nokia - Student Intern",
    "Aug 2025 - Jun 2026",
    "Production engineering for internal network, support, media, and issue-management systems",
    [
        "Built and enhanced three Django-based internal platforms supporting real operational, knowledge, governance, analytics, and reporting workflows.",
        "Designed backend modules, REST APIs, role and approval flows, search, notifications, audit histories, exports, dashboards, schedulers, and administrative controls.",
        "Integrated data, media, automation, and infrastructure tooling including Pandas, OpenPyXL, Plotly, Paramiko/AsyncSSH, Celery, APScheduler, OpenCV, Whisper, FFmpeg, and cloud storage.",
        "Applied production practices including modular design, validation, access controls, deployment configuration, observability-oriented workflows, and maintainable documentation.",
    ],
)]

internal_rows = [
    [Paragraph("NIVR", styles["Job"]), Paragraph("Nov 2025 - Mar 2026", styles["Meta"]), Paragraph("Video repository with search, uploads, playlists, moderation, engagement analytics, transcription, and media processing.", styles["SkillText"])],
    [Paragraph("STSI", styles["Job"]), Paragraph("Apr 2026 - May 2026", styles["Meta"]), Paragraph("Technical support portal for health checks, RCA, alarms, reports, schedulers, knowledge resources, and secure operations automation.", styles["SkillText"])],
    [Paragraph("TSHID", styles["Job"]), Paragraph("Jun 2026", styles["Meta"]), Paragraph("Critical-issues dashboard with registration, comments, severity, approvals, RBAC, notifications, exports, APIs, and analytics.", styles["SkillText"])],
]
internal_table = Table(internal_rows, colWidths=[18 * mm, 35 * mm, 123 * mm], repeatRows=0)
internal_table.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("BACKGROUND", (0, 0), (-1, -1), LIGHT),
    ("BOX", (0, 0), (-1, -1), 0.5, BORDER),
    ("INNERGRID", (0, 0), (-1, -1), 0.25, BORDER),
    ("LEFTPADDING", (0, 0), (-1, -1), 5),
    ("RIGHTPADDING", (0, 0), (-1, -1), 5),
    ("TOPPADDING", (0, 0), (-1, -1), 4),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
]))
story += [internal_table, Spacer(1, 2 * mm)]

story.append(PageBreak())
story += section("Selected Product Engineering")
story += [
    project_block("SK Central", "Identity and platform", "Shared SSO, application catalog, analytics, notifications, administration, and secure cross-application handoff for the SK ecosystem.", "React, TypeScript, Express, MongoDB, SSO"),
    project_block("SK Connect", "Realtime communication", "Code-based connections, messaging, communities, stories, attachments, notifications, and realtime voice/video calling with production security controls.", "React, Express, MongoDB, Socket.IO, WebRTC, Cloudflare TURN"),
    project_block("SK MediaFlow", "Cloud media platform", "Secure uploads, streaming, organizations, creator analytics, AI metadata, media processing, and cloud delivery pipelines.", "React, Prisma, MongoDB, AWS S3, CloudFront, FFmpeg"),
    project_block("SK MailPilot", "AI productivity", "Intelligent Gmail workspace with inbox triage, AI-assisted replies, approvals, scheduling, background automation, and auditable workflows.", "Node.js, MongoDB, Redis, LangGraph, Gmail API, BullMQ"),
    project_block("SK Quiz Coach", "Adaptive learning", "Targeted quizzes, personalized review loops, progress intelligence, analytics, and SK Central identity integration.", "React, TypeScript, Node.js, MongoDB"),
    project_block("SK CrawlPulse", "AI quality engineering", "Autonomous web crawling, journey mapping, and structured functional, API, UI, and edge-case test intelligence.", "Playwright, Node.js, MongoDB, SSE, Mermaid"),
]

story += section("Additional Engineering")
story += [Paragraph("SK Interview - Career and interview preparation workspace with guided practice, role discovery, AI assistance, and candidate workflows.", styles["Body"]), Paragraph("SK JobPilot - AI-assisted career copilot for job discovery, saved roles, application tracking, tailored resumes, interviews, and agent activity.", styles["Body"])]

story += section("Engineering Strengths")
strengths = [
    "Designs APIs and backend modules with clear ownership, validation, authorization, and failure handling.",
    "Builds responsive product interfaces that prioritize usability, accessibility, performance, and consistent visual systems.",
    "Works across realtime communication, media delivery, background queues, AI services, analytics, and cloud integrations.",
    "Documents architecture, deployment, environment requirements, and operational tradeoffs for maintainable handoff.",
]
story.extend(bullet(item) for item in strengths)

story += section("Links")
links = [
    ["Portfolio", "Latest-Portfolio repository and deployed portfolio"],
    ["SK ecosystem", "https://www.sk-hub.in"],
    ["GitHub", "https://github.com/samakshrastogi"],
    ["LinkedIn", "https://linkedin.com/in/samaksh-rastogi-9638b9254"],
]
link_table = Table([[Paragraph(label, styles["SkillLabel"]), Paragraph(value, styles["SkillText"])] for label, value in links], colWidths=[32 * mm, 144 * mm])
link_table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 2), ("BOTTOMPADDING", (0, 0), (-1, -1), 2)]))
story += [link_table]

doc.build(story)
print(OUTPUT)