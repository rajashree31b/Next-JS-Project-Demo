import Link from "next/link";
// why we used link compnet bcoz page will not refresh without link component page it should be refresh after click menu

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="menu_bar">
                <li>
                    <Link href="/">
                    <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                    <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                    <a>Contact</a>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/blog">
                    <a>Blog</a>
                    </Link>
                </li> */}
                <li>
                    <Link href="/product">
                    <a>Product</a>
                    </Link>
                </li>
                <li>
                    <Link href="/colorpalette">
                    <a>ColorPalette</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar