"use client";
import { useState } from "react";

export default function JobApplicationForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        title: "",
        companyName: "",
        companyLocation: "",
        phone: "",
        email: "",
        jobTitle: "",
        jobDuration: "",
        requirements: "",
        portfolioLink: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrorMessage("");
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => /^[0-9]{10,15}$/.test(phone);
    const validateURL = (url) => /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/[\w\d-./?%&=]*)?$/.test(url);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email || !formData.jobTitle || !formData.jobDuration) {
            return setErrorMessage("يرجى ملء جميع الحقول المطلوبة قبل الإرسال.");
        }
        if (!validateEmail(formData.email)) {
            return setErrorMessage("يرجى إدخال بريد إلكتروني صالح.");
        }
        if (formData.phone && !validatePhone(formData.phone)) {
            return setErrorMessage("يرجى إدخال رقم هاتف صالح (10-15 رقمًا).");
        }
        if (formData.portfolioLink && !validateURL(formData.portfolioLink)) {
            return setErrorMessage("يرجى إدخال رابط صالح للـ Portfolio أو السيرة الذاتية.");
        }

        setErrorMessage("");
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            const mailtoLink = `mailto:sara@alisconstructiongroup.com?subject=Job Application&body=${encodeURIComponent(
                `Full Name: ${formData.fullName}\nTitle: ${formData.title}\nCompany Name: ${formData.companyName}\nCompany Location: ${formData.companyLocation}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nJob Title: ${formData.jobTitle}\nJob Duration: ${formData.jobDuration}\nRequirements: ${formData.requirements}\nPortfolio/CV Link: ${formData.portfolioLink || "Not Provided"}`
            )}`;
            window.location.href = mailtoLink;
        }, 2000);
    };

    return (
        <div className="mx-auto max-w-2xl p-4">
            {errorMessage && <div className="bg-red-200 text-red-700 p-2 rounded mb-2">{errorMessage}</div>}

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                {[
                    { label: "Full Name", name: "fullName" },
                    { label: "Title", name: "title" },
                    { label: "Company Name", name: "companyName" },
                    { label: "Company City/State", name: "companyLocation" },
                    { label: "Phone", name: "phone", type: "tel" },
                    { label: "Email", name: "email", type: "email" },
                    { label: "Title of Job Opening", name: "jobTitle" },
                ].map(({ label, name, type = "text" }) => (
                    <div key={name} className={`${name === "jobTitle" || name === "jobDuration" ? "col-span-2" : "col-span-1"}`}>
                        <input
                            placeholder={label}
                            type={type}
                            name={name}
                            required
                            value={formData[name]}
                            onChange={handleChange}
                            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
                            disabled={loading}
                        />
                    </div>
                ))}

                {/* اختيار مدة الوظيفة */}
                <div className="col-span-2">
                    <select
                        name="jobDuration"
                        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
                        value={formData.jobDuration}
                        onChange={handleChange}
                        required
                        disabled={loading}
                    >
                        <option value="">Duration Of Job Opening</option>
                        <option value="Contract">Contract</option>
                        <option value="Permanent">Permanent</option>
                        <option value="Temp-Top-Perm">Temp-To-Perm</option>
                        <option value="EitherContractOrPerm">Either Contract Or Perm</option>
                    </select>
                </div>

                {/* حقل المتطلبات */}
                <div className="col-span-2">
                    <textarea
                        placeholder="Enter specific position requirements and responsibilities"
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
                        required
                        disabled={loading}
                    ></textarea>
                </div>

                {/* إدخال رابط السيرة الذاتية أو الـ Portfolio */}
                <div className="col-span-2">
                    <label className="block font-medium text-sky-400">Portfolio / CV Link</label>
                    <input
                        type="url"
                        name="portfolioLink"
                        placeholder="https://your-portfolio.com"
                        value={formData.portfolioLink}
                        onChange={handleChange}
                        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
                        disabled={loading}
                    />
                </div>

                {/* زر الإرسال */}
                <button
                    type="submit"
                    className={`col-span-2 text-white p-2 rounded transition-all ${
                        loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                    }`}
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}
