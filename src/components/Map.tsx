export default function Map() {
   return (
      <div className="flex flex-col items-center gap-4">
      {/* Text with transparent gradient background */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent text-3xl font-bold">
         </div>

            {/* Google Maps Embed */}
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13741.93055263183!2d31.936864000000003!3d30.563918000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f815a59b84b6db%3A0xe99d607d143b33d8!2sEl%20Qassasin%20Central%20Hospital!5e0!3m2!1sen!2sus!4v1758133173410!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
            ></iframe>
      </div>
   )
}