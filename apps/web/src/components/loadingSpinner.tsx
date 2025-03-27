import { SpinnerWithText } from "./ui/spinner";

const LoadingSpinner = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-4">
            <div className="grid grid-cols-1 gap-8">
                <SpinnerWithText text="Loading data..." />
            </div>
        </div>
    );
};

export default LoadingSpinner;