"use client";

import { Send } from "lucide-react";
import { useEffect, useState } from "react";

const MessageInput = ({ value, onChange, onSubmit, loading }) => {
    const [isMounted, setIsMounted] = useState(false);

    const handleKeyPress = (e) => {
        if (!value) return;

        if (e.key === "Enter") {
            onSubmit();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!value) return;
        onSubmit();
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="w-full mt-auto flex items-center gap-3 overflow-hidden justify-between rounded-l-lg ">
            <div className="grow h-full  bg-primary rounded-r-lg overflow-hidden ">
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    onKeyDown={handleKeyPress}
                    className={`grow h-full w-full px-5 outline-none
                                 py-4 font-medium text-sm placeholder:opacity-50 
                                 placeholder-black_accent_2`}
                    placeholder="Write messages..."
                />
            </div>

            <button
                disabled={loading}
                // style={loading && { opacity: 0.4 }}
                onClick={handleSubmit}
                className={`transition bg-orange rounded-lg ml-auto hover:bg-black hover:text-orange p-4 shadow-md ${
                    loading ? "opacity-60" : ""
                }`}
            >
                <Send className="w-5 h-5" />
            </button>
        </div>
    );
};

export default MessageInput;
