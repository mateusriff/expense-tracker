import "./Footer.css"

export default function Footer() {

    const year = new Date().getFullYear();

    return <footer>© Mateus Riff {year}</footer>

}