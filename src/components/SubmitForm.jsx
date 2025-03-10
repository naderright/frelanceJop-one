'use client'
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
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === "file" ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:info@alisconstructiongroup.com?subject=Job Application&body=${encodeURIComponent(
            `Full Name: ${formData.fullName}\nTitle: ${formData.title}\nCompany Name: ${formData.companyName}\nCompany Location: ${formData.companyLocation}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nJob Title: ${formData.jobTitle}\nJob Duration: ${formData.jobDuration}\nRequirements: ${formData.requirements}`
        )}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className=" mx-auto   grid grid-cols-2 gap-4">
            <form onSubmit={handleSubmit} className="col-span-2 grid grid-cols-2 gap-4">
                {[
                    { label: "Full Name", name: "fullName" },
                    { label: "Title", name: "title" },
                    { label: "Company Name", name: "companyName" },
                    { label: "Company City/State", name: "companyLocation" },
                    { label: "Phone", name: "phone", type: "tel" },
                    { label: "Email", name: "email", type: "email" },
                    { label: "Title of Job Opening", name: "jobTitle" },
                ].map(({ label, name, type = "text" }) => (
                    <div key={name} className={`${name == 'jobTitle' || name == 'jobDuration' ? 'col-span-2' : 'col-span-1'}`}>
                        <input
                            placeholder={label}
                            type={type}
                            name={name}
                            required
                            value={formData[name]}
                            onChange={handleChange}
                            className="w-full border p-1 rounded"
                        />
                    </div>
                ))}
                <div className="col-span-2">
                    <select name="jobDuration" className="w-full border p-1 rounded" >
                        <option value="Duration Of Job Opening">Duration Of Job Opening</option>
                        <option value="Contract">Contract</option>
                        <option value="Permanent">Permanent</option>
                        <option value="Temp-Top-Perm">Temp-Top-Perm</option>
                        <option value="EitherContractOrPerm">Either Contract Or Perm</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <textarea
                        placeholder="Enter specific position requirements and responsibilities"
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        className="w-full border p-1 rounded"
                    ></textarea>
                </div>

                <div className="col-span-2">
                    <label className="block font-medium text-sky-400">Or attach a Word or PDF file</label>
                    <input
                        type="file"
                        name="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        className="w-full border p-1 rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
