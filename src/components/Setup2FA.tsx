import { Button } from './ui/button';

const Setup2FA = (props: { qrCodeUrl: string; switchForm: () => void }) => {
  return (
    <div className="p-4">
      <img src={props.qrCodeUrl} alt="QR Code" className="mb-4" />
      <Button onClick={props.switchForm}>Switch Form</Button>
    </div>
  );
};

export default Setup2FA;
