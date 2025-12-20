const WhatsAppButton = () => {
  const phoneNumber = "2348100868080";
  const message = "Hello, I’d like to make an inquiry.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 text-white px-4 py-2 rounded-lg"
    >
      Chat on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
