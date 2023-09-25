import Link from "next/link";

export default function Navbar(){
    return (
        <div>
            <Link href="/user_info"> User Details</Link>
            <br></br>
            <Link href="/login"> Login</Link>
            <br></br>
            <Link href="/logout"> Logout</Link>
        </div>
    );
}