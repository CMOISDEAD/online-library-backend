import React from "react";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface Props {
  url: string;
  username: string;
}

export default function Email({ username }: Props) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>Online Library recent login</Preview>
        <Body style={main}>
          <Container>
            <Section style={logo}>
              <Text className="text-2xl font-bold text-blue-500">
                Online Library
              </Text>
            </Section>

            <Section style={content}>
              <Img
                width={620}
                src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/yelp-header.png"
              />

              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                  <Heading
                    style={{
                      fontSize: 32,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Hi {username},
                  </Heading>
                  <Heading
                    as="h2"
                    style={{
                      fontSize: 26,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    We noticed a recent login to your Online Library account.
                  </Heading>

                  <Text style={paragraph}>
                    <b>Time: </b>
                    {new Date().toLocaleString()}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Device: </b>
                    Chrome on Linux
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Location: </b>
                    Armenia, Quindió, Colombia
                  </Text>
                  <Text
                    style={{
                      color: "rgb(0,0,0, 0.5)",
                      fontSize: 14,
                      marginTop: -5,
                    }}
                  >
                    *Approximate geographic location based on IP address:
                    47.149.53.167
                  </Text>

                  <Text style={paragraph}>
                    If this was you, there's nothing else you need to do.
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    If this wasn't you or if you have additional questions,
                    please see our support page.
                  </Text>
                </Column>
              </Row>
              <Row style={{ ...boxInfos, paddingTop: "0" }}>
                <Column style={containerButton} colSpan={2}>
                  <Button style={button}>Learn More</Button>
                </Column>
              </Row>
            </Section>

            <Section style={containerImageFooter}>
              <Img
                width={620}
                src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/yelp-footer.png"
              />
            </Section>

            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                color: "rgb(0,0,0, 0.7)",
              }}
            >
              © 2023 | Online Library., 350 Mission Street, San Francisco, CA
              94105, U.S.A. | www.onlinelibrary.com
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  padding: "12px 30px",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px 40px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
