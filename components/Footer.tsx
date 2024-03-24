import Link from 'next/link';
import { RiGithubLine } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="bg-white border-1">
            <div className="mx-auto py-10 flex flex-row items-center justify-center">
                <p className="text-center text-sm text-black">
                    &copy; {new Date().getFullYear()} Unddd All rights
                    reserved.
                </p>
                <Link href="https://github.com/ppalladio">
                    <RiGithubLine />
                </Link>
            </div>
        </footer>
    );
};
export default Footer;
