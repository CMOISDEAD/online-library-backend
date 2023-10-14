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
        <Preview>Online Library registration</Preview>
        <Body className="bg-white" style={main}>
          <Container>
            <Section className="overflow-hidden border border-neutral-500">
              <Img
                width={620}
                src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/yelp-header.png"
              />

              <Row className="px-2 pt-3">
                <Column className="text-center">
                  <Heading className="text-4xl font-bold">
                    Hi {username},
                  </Heading>
                  <Heading as="h2" className="text-3xl font-bold">
                    We noticed you recently registered for an account, congrats!
                  </Heading>

                  <Text className="text-lg">
                    We’re excited to have you on board. Online Library is a
                    community of library lovers and we’re excited to have you
                    join us.
                  </Text>
                </Column>
              </Row>
              <Row className="px-2 pt-3">
                <Column colSpan={2}>
                  <Button className="py-1 px-2 text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-600">
                    activate your account
                  </Button>
                </Column>
              </Row>
            </Section>

            <Section>
              <Img
                width={620}
                src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/yelp-footer.png"
              />
            </Section>

            <Text className="text-center">
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
  fontFamily: "Helvetica, Arial, sans-serif",
};
