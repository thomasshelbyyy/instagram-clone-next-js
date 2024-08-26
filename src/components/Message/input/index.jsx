"use client";

import {
	FaceSmileIcon,
	HeartIcon,
	MicrophoneIcon,
	PaperAirplaneIcon,
	PhotoIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const InputSection = () => {
	const [inputValue, setInputValue] = useState("");
	return (
		<div className="border-t border-gray-300 py-3 px-6 pb-14 md:pb-3">
			<div className="flex justify-between border border-gray-300 rounded-full px-3 py-2 ">
				<div className="flex gap-2 items-center flex-1">
					<button>
						<FaceSmileIcon className="w-5 h-5" />
					</button>

					<input
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						placeholder="Message..."
						className="pl-2 bg-transparent w-full focus:outline-none"
					/>
				</div>

				<div className="flex gap-2 items-center">
					{inputValue.length > 0 ? (
						<button>
							<PaperAirplaneIcon className="w-5 h-5" />
						</button>
					) : (
						<>
							<button>
								<MicrophoneIcon className="w-5 h-5" />
							</button>
							<button>
								<PhotoIcon className="w-5 h-5" />
							</button>
							<button>
								<HeartIcon className="w-5 h-5" />
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default InputSection;
