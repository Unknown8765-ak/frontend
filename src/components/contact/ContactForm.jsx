import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendContactMessage } from "../../services/contactService/contactService";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

 const onSubmit = async (data) => {
  try {
    setLoading(true);

    const response = await sendContactMessage(data);

    alert(response.message);

    reset();
  } catch (error) {
    alert(error.message);
  } finally {
    setLoading(false);
  }
};
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Contact Form
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Request a Free Consultation
          </h2>

          <p className="mt-5 text-gray-600">
            Fill in the form below and our team will get back to you as
            soon as possible.
          </p>
        </div>

        {/* Form */}

        <form
  onSubmit={handleSubmit(onSubmit)}
  className="
    relative
    overflow-hidden
    mt-16
    rounded-4xl
    border
    border-blue-100
    bg-linear-to-br
    from-white
    via-blue-50/40
    to-sky-50
    p-8
    md:p-10
    shadow-[0_20px_60px_rgba(59,130,246,0.12)]
  "
>
  {/* Background Glow */}
  <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"></div>

  <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-blue-500 via-sky-500 to-cyan-500"></div>

  <div className="relative grid md:grid-cols-2 gap-6">

    {/* Name */}
    <div>
      <input
        type="text"
        placeholder="Full Name"
        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white/80
          px-5
          py-4
          outline-none
          transition-all
          duration-300
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
        {...register("name", {
          required: "Name is required",
        })}
      />

      {errors.name && (
        <p className="mt-2 text-sm text-red-500">
          {errors.name.message}
        </p>
      )}
    </div>

    {/* Email */}
    <div>
      <input
        type="email"
        placeholder="Email Address"
        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white/80
          px-5
          py-4
          outline-none
          transition-all
          duration-300
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Enter a valid email",
          },
        })}
      />

      {errors.email && (
        <p className="mt-2 text-sm text-red-500">
          {errors.email.message}
        </p>
      )}
    </div>

    {/* Phone */}
    <div>
      <input
        type="tel"
        placeholder="Phone Number"
        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white/80
          px-5
          py-4
          outline-none
          transition-all
          duration-300
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
        {...register("phone", {
          required: "Phone number is required",
          pattern: {
            value: /^[6-9]\d{9}$/,
            message: "Enter a valid phone number",
          },
        })}
      />

      {errors.phone && (
        <p className="mt-2 text-sm text-red-500">
          {errors.phone.message}
        </p>
      )}
    </div>

    {/* Subject */}
    <div>
      <input
        type="text"
        placeholder="Subject"
        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white/80
          px-5
          py-4
          outline-none
          transition-all
          duration-300
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
        {...register("subject", {
          required: "Subject is required",
        })}
      />

      {errors.subject && (
        <p className="mt-2 text-sm text-red-500">
          {errors.subject.message}
        </p>
      )}
    </div>

  </div>

  {/* Message */}

  <div className="relative mt-6">
    <textarea
      rows={6}
      placeholder="Tell us about your project..."
      className="
        w-full
        rounded-2xl
        border
        border-slate-200
        bg-white/80
        px-5
        py-4
        outline-none
        resize-none
        transition-all
        duration-300
        focus:border-blue-500
        focus:ring-4
        focus:ring-blue-100
      "
      {...register("message", {
        required: "Message is required",
        minLength: {
          value: 20,
          message: "Message should be at least 20 characters",
        },
      })}
    />

    {errors.message && (
      <p className="mt-2 text-sm text-red-500">
        {errors.message.message}
      </p>
    )}
  </div>

  {/* Button */}

  <button
    type="submit"
    disabled={loading}
    className="
      mt-8
      flex
      w-full
      items-center
      justify-center
      rounded-2xl
      bg-linear-to-r
      from-blue-600
      via-sky-600
      to-cyan-600
      px-6
      py-4
      text-lg
      font-semibold
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_15px_35px_rgba(59,130,246,0.35)]
      disabled:cursor-not-allowed
      disabled:opacity-60
    "
  >
    {loading ? "Sending Message..." : "Send Message"}
  </button>
</form>
      </div>
    </section>
  );
};

export default ContactForm;