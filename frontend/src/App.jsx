import { useState } from "react";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    requirement: "",
    budget: "",
    timeline: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong. Please try again."
        );
      }

      console.log("Lead processed:", data);

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        company: "",
        requirement: "",
        budget: "",
        timeline: "",
      });
    } catch (err) {
      console.error(err);
      setError(
        err.message ||
          "Unable to submit your request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050507] text-white">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Purple glow */}
        <div
          className="
            absolute -left-40 top-0
            h-[450px] w-[450px]
            rounded-full
            bg-violet-700/20
            blur-[120px]
            animate-pulse
          "
        />

        {/* Blue glow */}
        <div
          className="
            absolute -right-40 top-[20%]
            h-[400px] w-[400px]
            rounded-full
            bg-cyan-500/10
            blur-[120px]
            animate-pulse
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute bottom-[-180px] right-[30%]
            h-[350px] w-[350px]
            rounded-full
            bg-purple-600/10
            blur-[120px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute inset-0 opacity-30
            [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
            [background-size:70px_70px]
            [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]
          "
        />

        {/* Noise */}
        <div
          className="
            absolute inset-0 opacity-[0.025]
            bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
            [background-size:4px_4px]
          "
        />
      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav
        className="
          relative z-10 mx-auto
          flex h-[90px]
          w-[calc(100%-60px)]
          max-w-[1400px]
          items-center justify-between
          border-b border-white/[0.07]
        "
      >

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div
            className="
              grid h-10 w-10 place-items-center
              rounded-xl
              border border-white/15
              bg-white/[0.06]
              text-[11px] font-extrabold
              shadow-[inset_0_0_20px_rgba(255,255,255,0.04)]
            "
          >
            AI
          </div>

          <div>
            <span
              className="
                block
                font-mono
                text-sm font-bold
                tracking-[3px]
              "
            >
              LEADFLOW
            </span>

            <span
              className="
                mt-0.5 block
                text-[8px]
                tracking-[2px]
                text-zinc-600
              "
            >
              AUTOMATION
            </span>
          </div>

        </div>

        {/* Status */}
        <div
          className="
            flex items-center gap-2
            text-[9px]
            tracking-[1.5px]
            text-zinc-600
          "
        >
          <span
            className="
              h-1.5 w-1.5 rounded-full
              bg-emerald-300
              shadow-[0_0_12px_#8cffbd]
              animate-pulse
            "
          />

          AI SYSTEM ONLINE
        </div>

      </nav>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative z-10 mx-auto
          grid min-h-[calc(100vh-160px)]
          w-[calc(100%-60px)]
          max-w-[1400px]
          grid-cols-1
          items-center
          gap-16
          py-16
          lg:grid-cols-[1fr_0.85fr]
          lg:gap-24
        "
      >

        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div
          className="
            animate-[slideLeft_0.9s_ease-out]
          "
        >

          {/* Eyebrow */}
          <div
            className="
              mb-6 flex items-center gap-3
              text-[10px]
              font-semibold
              tracking-[2.5px]
              text-zinc-500
            "
          >
            <span className="h-px w-7 bg-zinc-500" />

            INTELLIGENT LEAD INTAKE
          </div>

          {/* Heading */}
          <h1
            className="
              max-w-3xl
              font-sans
              text-[48px]
              font-semibold
              leading-[0.98]
              tracking-[-3px]
              sm:text-6xl
              lg:text-[78px]
            "
          >
            Turn every inquiry
            <br />

            into your next

            <span
              className="
                bg-gradient-to-r
                from-white
                via-violet-300
                to-cyan-300
                bg-clip-text
                text-transparent
              "
            >
              {" "}opportunity.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-xl
              text-sm
              leading-7
              text-zinc-500
            "
          >
            Capture qualified leads, understand what they need,
            and route them automatically — without manually
            checking every form submission.
          </p>

          {/* Features */}
          <div
            className="
              mt-10
              grid grid-cols-1
              gap-3
              sm:grid-cols-3
            "
          >

            {/* Feature */}
            <div
              className="
                group
                flex items-center gap-3
                rounded-xl
                border border-white/[0.07]
                bg-white/[0.025]
                p-3
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/15
                hover:bg-white/[0.05]
              "
            >
              <div
                className="
                  grid h-8 w-8 shrink-0 place-items-center
                  rounded-lg
                  bg-white/[0.07]
                  text-xs
                "
              >
                ✦
              </div>

              <div>
                <strong className="block text-[10px]">
                  AI Analysis
                </strong>

                <span className="text-[8px] text-zinc-600">
                  Understands every request
                </span>
              </div>
            </div>

            {/* Feature */}
            <div
              className="
                group
                flex items-center gap-3
                rounded-xl
                border border-white/[0.07]
                bg-white/[0.025]
                p-3
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/15
                hover:bg-white/[0.05]
              "
            >
              <div
                className="
                  grid h-8 w-8 shrink-0 place-items-center
                  rounded-lg
                  bg-white/[0.07]
                  text-xs
                "
              >
                ↗
              </div>

              <div>
                <strong className="block text-[10px]">
                  Smart Routing
                </strong>

                <span className="text-[8px] text-zinc-600">
                  Prioritizes valuable leads
                </span>
              </div>
            </div>

            {/* Feature */}
            <div
              className="
                group
                flex items-center gap-3
                rounded-xl
                border border-white/[0.07]
                bg-white/[0.025]
                p-3
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/15
                hover:bg-white/[0.05]
              "
            >
              <div
                className="
                  grid h-8 w-8 shrink-0 place-items-center
                  rounded-lg
                  bg-white/[0.07]
                  text-xs
                "
              >
                ⚡
              </div>

              <div>
                <strong className="block text-[10px]">
                  Instant
                </strong>

                <span className="text-[8px] text-zinc-600">
                  No manual processing
                </span>
              </div>
            </div>

          </div>

          {/* Bottom system text */}
          <div
            className="
              mt-10
              flex items-center gap-3
              text-[8px]
              tracking-[2px]
              text-zinc-700
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" />

            YOUR SALES PIPELINE, AUTOMATED
          </div>

        </div>

        {/* ===================================================
            RIGHT FORM
        ==================================================== */}

        <div
          className="
            animate-[slideUp_1s_0.15s_ease-out_both]
          "
        >

          {!submitted ? (

            /* ================= FORM CARD ================= */

            <div
              className="
                relative overflow-hidden
                rounded-3xl
                border border-white/[0.11]
                bg-white/[0.045]
                p-6
                shadow-[0_40px_100px_rgba(0,0,0,0.45)]
                backdrop-blur-3xl
                sm:p-8
              "
            >

              {/* Card glow */}
              <div
                className="
                  pointer-events-none
                  absolute -right-24 -top-24
                  h-64 w-64
                  rounded-full
                  bg-violet-600/15
                  blur-[80px]
                "
              />

              {/* Header */}
              <div
                className="
                  relative mb-7
                  flex items-start
                  justify-between
                "
              >

                <div>

                  <span
                    className="
                      text-[8px]
                      font-semibold
                      tracking-[2px]
                      text-zinc-600
                    "
                  >
                    PROJECT INTAKE
                  </span>

                  <h2
                    className="
                      mt-2
                      font-mono
                      text-xl
                      font-medium
                      tracking-tight
                    "
                  >
                    Tell us what you're building.
                  </h2>

                </div>

                <div
                  className="
                    flex items-center gap-2
                    rounded-full
                    border border-emerald-300/15
                    bg-emerald-300/[0.04]
                    px-2 py-1.5
                    text-[8px]
                    tracking-[1px]
                    text-emerald-300
                  "
                >
                  <span
                    className="
                      h-1.5 w-1.5
                      rounded-full
                      bg-emerald-300
                      shadow-[0_0_10px_#8cffbd]
                      animate-pulse
                    "
                  />

                  LIVE
                </div>

              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="relative z-10"
              >

                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  <Input
                    label="Name"
                    name="name"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    label="Work email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* Company */}
                <Input
                  label="Company"
                  name="company"
                  placeholder="Your company"
                  value={form.company}
                  onChange={handleChange}
                  required
                />

                {/* Requirement */}
                <div className="mb-4">

                  <label
                    className="
                      mb-2 block
                      text-[9px]
                      font-medium
                      text-zinc-500
                    "
                  >
                    WHAT DO YOU NEED?
                  </label>

                  <textarea
                    name="requirement"
                    placeholder="Tell us what you're looking to build..."
                    value={form.requirement}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="
                      w-full resize-y
                      rounded-xl
                      border border-white/[0.08]
                      bg-white/[0.035]
                      px-3 py-3
                      text-xs text-white
                      outline-none
                      placeholder:text-zinc-700
                      transition-all duration-200
                      focus:border-violet-400/60
                      focus:bg-white/[0.055]
                      focus:ring-4
                      focus:ring-violet-500/[0.08]
                    "
                  />

                </div>

                {/* Budget + Timeline */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  <Input
                    label="Estimated budget"
                    name="budget"
                    placeholder="$5,000+"
                    value={form.budget}
                    onChange={handleChange}
                  />

                  <div className="mb-4">

                    <label
                      className="
                        mb-2 block
                        text-[9px]
                        font-medium
                        text-zinc-500
                      "
                    >
                      TIMELINE
                    </label>

                    <select
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className="
                        h-[43px]
                        w-full
                        rounded-xl
                        border border-white/[0.08]
                        bg-white/[0.035]
                        px-3
                        text-xs text-white
                        outline-none
                        transition-all
                        focus:border-violet-400/60
                        focus:bg-white/[0.055]
                        focus:ring-4
                        focus:ring-violet-500/[0.08]
                      "
                    >
                      <option
                        value=""
                        className="bg-zinc-900"
                      >
                        Select timeline
                      </option>

                      <option
                        value="ASAP"
                        className="bg-zinc-900"
                      >
                        ASAP
                      </option>

                      <option
                        value="This month"
                        className="bg-zinc-900"
                      >
                        This month
                      </option>

                      <option
                        value="This quarter"
                        className="bg-zinc-900"
                      >
                        This quarter
                      </option>

                      <option
                        value="Just exploring"
                        className="bg-zinc-900"
                      >
                        Just exploring
                      </option>

                    </select>

                  </div>

                </div>

                {/* Error */}
                {error && (
                  <div
                    className="
                      mb-3
                      flex items-center gap-2
                      rounded-lg
                      border border-red-400/15
                      bg-red-400/[0.05]
                      p-2.5
                      text-[9px]
                      text-red-300
                    "
                  >
                    <span
                      className="
                        grid h-4 w-4
                        place-items-center
                        rounded-full
                        bg-red-400/10
                      "
                    >
                      !
                    </span>

                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    relative
                    flex h-[50px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    rounded-xl
                    bg-white
                    text-[10px]
                    font-extrabold
                    tracking-[1.5px]
                    text-black
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_15px_40px_rgba(255,255,255,0.12)]
                    active:scale-[0.98]
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >

                  {loading ? (
                    <>
                      <span
                        className="
                          h-3.5 w-3.5
                          animate-spin
                          rounded-full
                          border-2
                          border-black/20
                          border-t-black
                        "
                      />

                      ANALYZING REQUEST...
                    </>
                  ) : (
                    <>
                      <span
                        className="
                          absolute
                          -left-20
                          h-full
                          w-20
                          -skew-x-12
                          bg-white/70
                          blur-md
                          transition-all
                          duration-700
                          group-hover:left-[120%]
                        "
                      />

                      SUBMIT PROJECT

                      <span className="text-base">
                        ↗
                      </span>
                    </>
                  )}

                </button>

              </form>

              {/* Footer */}
              <div
                className="
                  mt-5
                  flex
                  flex-col
                  gap-2
                  text-[8px]
                  text-zinc-700
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >

                <div
                  className="
                    flex items-center gap-2
                    tracking-[1px]
                  "
                >
                  <span
                    className="
                      h-1 w-1
                      rounded-full
                      bg-emerald-300
                      shadow-[0_0_8px_#8cffbd]
                    "
                  />

                  SECURE SUBMISSION
                </div>

                <span>
                  Your information stays private.
                </span>

              </div>

            </div>

          ) : (

            /* ================= SUCCESS CARD ================= */

            <div
              className="
                flex min-h-[590px]
                flex-col
                items-center
                justify-center
                overflow-hidden
                rounded-3xl
                border border-white/[0.11]
                bg-white/[0.045]
                p-8
                text-center
                shadow-[0_40px_100px_rgba(0,0,0,0.45)]
                backdrop-blur-3xl
                animate-[successIn_0.6s_ease-out]
              "
            >

              {/* Check circle */}
              <div
                className="
                  mb-6
                  grid h-24 w-24
                  place-items-center
                  rounded-full
                  border border-emerald-300/20
                  bg-emerald-300/[0.06]
                  shadow-[0_0_60px_rgba(140,255,189,0.08)]
                  animate-pulse
                "
              >
                <div
                  className="
                    grid h-14 w-14
                    place-items-center
                    rounded-full
                    bg-emerald-300/10
                    text-2xl
                    text-emerald-300
                  "
                >
                  ✓
                </div>
              </div>

              <span
                className="
                  text-[9px]
                  tracking-[2px]
                  text-emerald-300
                "
              >
                REQUEST RECEIVED
              </span>

              <h2
                className="
                  mt-3
                  font-mono
                  text-3xl
                  tracking-tight
                "
              >
                Your project is{" "}
                <span className="text-emerald-300">
                  in motion.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-md
                  text-xs
                  leading-6
                  text-zinc-500
                "
              >
                Your request has been captured successfully.
                The lead automation system can now analyze,
                qualify and route this opportunity.
              </p>

              {/* Processing */}
              <div
                className="
                  mt-7
                  w-full
                  rounded-xl
                  border border-white/[0.07]
                  bg-white/[0.025]
                  px-4
                "
              >

                <ProcessingRow
                  title="Lead captured"
                  status="DONE"
                />

                <ProcessingRow
                  title="AI analysis"
                  status="READY"
                />

                <ProcessingRow
                  title="Smart routing"
                  status="READY"
                />

              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="
                  mt-5
                  text-[10px]
                  text-zinc-600
                  transition
                  hover:text-white
                "
              >
                Submit another project ↗
              </button>

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div
        className="
          relative z-10
          mx-auto
          flex w-[calc(100%-60px)]
          max-w-[1400px]
          items-center
          justify-between
          pb-6
          text-[7px]
          tracking-[1.5px]
          text-zinc-800
        "
      >

        <span>
          © 2026 LEADFLOW
        </span>

        <div className="hidden items-center gap-2 sm:flex">
          <span
            className="
              h-1 w-1
              animate-pulse
              rounded-full
              bg-emerald-300
              shadow-[0_0_8px_#8cffbd]
            "
          />

          AUTOMATION ENGINE ACTIVE
        </div>

        <span>
          AI • SALES • AUTOMATION
        </span>

      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes successIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

    </main>
  );
}


/* =========================================================
   INPUT COMPONENT
========================================================= */

function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="mb-4">

      <label
        className="
          mb-2 block
          text-[9px]
          font-medium
          text-zinc-500
        "
      >
        {label.toUpperCase()}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="
          h-[43px]
          w-full
          rounded-xl
          border border-white/[0.08]
          bg-white/[0.035]
          px-3
          text-xs text-white
          outline-none
          placeholder:text-zinc-700
          transition-all duration-200
          focus:border-violet-400/60
          focus:bg-white/[0.055]
          focus:ring-4
          focus:ring-violet-500/[0.08]
        "
      />

    </div>
  );
}


/* =========================================================
   PROCESSING ROW
========================================================= */

function ProcessingRow({ title, status }) {
  return (
    <div
      className="
        flex items-center
        justify-between
        border-b border-white/[0.05]
        py-3
        last:border-0
      "
    >

      <span
        className="
          flex items-center gap-2
          text-[9px]
          text-zinc-500
        "
      >
        <i
          className="
            h-1.5 w-1.5
            rounded-full
            bg-emerald-300
            shadow-[0_0_8px_#8cffbd]
          "
        />

        {title}
      </span>

      <b
        className="
          text-[7px]
          tracking-[1px]
          text-emerald-300
        "
      >
        {status}
      </b>

    </div>
  );
}

export default App;