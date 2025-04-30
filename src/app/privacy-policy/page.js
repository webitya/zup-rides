'use client';

import { Container, Typography, Divider, Box } from '@mui/material';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <Container className="py-8 px-4 max-w-7xl">
      <Typography variant="h4" className="font-bold text-center mb-8 text-green-900">
        Privacy Policy
      </Typography>
      
      <Box className="space-y-6">
        <Typography variant="body1" paragraph>
          <strong>Last updated: April 30, 2025</strong>
        </Typography>

        <Typography variant="body1" paragraph>
          At <strong>ZupRides</strong>, we value your privacy. This Privacy Policy outlines the types of personal information we collect, how we use it, and the steps we take to protect it. By using our website, you agree to the collection and use of information in accordance with this policy.
        </Typography>

        <Typography variant="h6" className="font-semibold text-green-700">
          1. Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We collect personal and automatically collected information to provide and enhance our services.
        </Typography>

        <Typography variant="h6" className="font-semibold text-green-700">
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          Your information is used for providing services, improving user experience, processing payments, and communication.
        </Typography>

        <Typography variant="h6" className="font-semibold text-green-700">
          3. How We Protect Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We implement security measures such as SSL encryption and restricted access to protect your personal information.
        </Typography>

        <Typography variant="h6" className="font-semibold text-green-700">
          4. Sharing of Information
        </Typography>
        <Typography variant="body1" paragraph>
          We do not sell your personal information. However, we may share it with trusted third parties and legal authorities as needed.
        </Typography>

        <Typography variant="h6" className="font-semibold text-green-700">
          5. Your Rights and Choices
        </Typography>
        <Typography variant="body1" paragraph>
          You have rights to access, update, delete your data, and opt-out of marketing communications.
        </Typography>

        <Typography variant="h6" className="font-semibold text-green-700">
          6. Third-Party Websites
        </Typography>
        <Typography variant="body1" paragraph>
          We are not responsible for the privacy practices of third-party websites linked from our website.
        </Typography>

        <Typography variant="h6" className="font-semibold text-green-700">
          7. Children&apos;s Privacy
        </Typography>
        <Typography variant="body1" paragraph>
          Our services are not intended for children under 13. We do not knowingly collect data from children.
        </Typography>

        <Typography variant="h6" className="font-semibold text-green-700">
          8. Changes to This Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          Any changes to this policy will be posted on this page with an updated &quot;Last Updated&quot; date.
        </Typography>

        <Typography variant="h6" className="font-semibold text-green-700">
          9. Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at <strong>support@zuprides.com</strong>.
        </Typography>

        <Divider className="my-8" />
        <Box className="text-center">
          <Link href="/" className="text-green-700 hover:text-green-500">
            Go back to the home page
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
