import { Agentation } from "agentation";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            {process.env.NODE_ENV === "development" && <Agentation />}
        </>
    );
}
