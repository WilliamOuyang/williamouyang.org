import Footer from "@/pagecomponents/shared/Footer"
import Navbar from "@/pagecomponents/shared/Navbar"

const Transfer = () => {
  return (
    <>
    <Navbar/>
    <u><strong><h1>Wire / External Transfer</h1></strong></u>
    <h1>
    <ul>
    <li>Country: United States</li>
    <li>Currency: U.S. Dollar</li>
    <li>Account Type: Personal Account</li>
    <li>Bank: Bank of America</li>
    <li>Address: 6335 Paseo Santa Cruz, Pleasanton, CA, 94566</li>
    <li>Account Number: 9902</li>
    <li>Recipient's first name: William</li>
  	<li>Recipient's last name: Ouyang</li>
    <li>Account Number: 9902</li>
    <li>Routing numbers for: Adv Plus Banking - 9902:</li>
        <li>Electronic (for Direct Deposit and Automatic Payments):	121000358</li>
        <li>Wire (for Wire Transfer):	026009593</li>
    </ul>
      </h1>

        <Footer />
        </>
  )
}

export default Transfer