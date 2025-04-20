import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Link,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  phone: string;
  service: string;
  additionalInfo?: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  phone,
  service,
  additionalInfo,
}: Readonly<EmailTemplateProps>) => {
  return (
    <Html>
      <Head />
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Section style={headerStyle}>
            <Heading style={headingStyle}>PayMyTax</Heading>
            <Text style={subHeadingStyle}>Service Request Notification</Text>
          </Section>

          <Section style={contentStyle}>
            <Text style={textStyle}>
              You have received a new service request from{" "}
              <strong>{name}</strong>.
            </Text>

            <Section style={detailsSectionStyle}>
              <Text style={labelStyle}>Service Requested:</Text>
              <Text style={valueStyle}>{service}</Text>

              <Text style={labelStyle}>Phone:</Text>
              <Text style={valueStyle}>
                <Link href={`tel:${phone}`} style={linkStyle}>
                  {phone}
                </Link>
              </Text>

              {additionalInfo && (
                <>
                  <Text style={labelStyle}>Additional Information:</Text>
                  <Text style={valueStyle}>{additionalInfo}</Text>
                </>
              )}
            </Section>

            <Text style={textStyle}>
              Please respond to this request at your earliest convenience.
            </Text>
          </Section>

          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              &copy; {new Date().getFullYear()} PayMyTax. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const bodyStyle = {
  backgroundColor: "#f7fafc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  margin: 0,
  padding: 0,
};

const containerStyle = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  margin: "20px auto",
  maxWidth: "600px",
  padding: "20px",
};

const headerStyle = {
  borderBottom: "1px solid #e2e8f0",
  paddingBottom: "16px",
  marginBottom: "20px",
};

const headingStyle = {
  color: "#1a202c",
  fontSize: "24px",
  fontWeight: "bold",
  margin: 0,
};

const subHeadingStyle = {
  color: "#4a5568",
  fontSize: "16px",
  margin: "8px 0 0",
};

const contentStyle = {
  marginBottom: "20px",
};

const textStyle = {
  color: "#4a5568",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 16px",
};

const detailsSectionStyle = {
  backgroundColor: "#f7fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "6px",
  padding: "16px",
  margin: "16px 0",
};

const labelStyle = {
  color: "#4a5568",
  fontSize: "12px",
  fontWeight: "bold",
  margin: "0 0 4px",
};

const valueStyle = {
  color: "#1a202c",
  fontSize: "14px",
  margin: "0 0 12px",
};

const linkStyle = {
  color: "#3182ce",
  textDecoration: "none",
};

const footerStyle = {
  borderTop: "1px solid #e2e8f0",
  paddingTop: "16px",
  textAlign: "center" as const,
};

const footerTextStyle = {
  color: "#718096",
  fontSize: "12px",
  margin: "4px 0",
};
