"use client";

function GoogleMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7003.148607719!2d77.242809!3d28.642518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7628fc4e03%3A0x851f0d9ba6bed8f0!2sAgilis%20Communication%20Services!5e0!3m2!1sen!2sin!4v1739605756759!5m2!1sen!2sin"
      className="w-full h-96"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default GoogleMap;
