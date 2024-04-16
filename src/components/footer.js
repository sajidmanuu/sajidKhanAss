import React from 'react'
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <div>
         <div className="footer" id="footer">
            <div className="container">
                <div className="child">
                    <div className="footerChild1">
                        <img src="images\logos\OIP_21_.png" />
                        <h4>Mail us at: <a href="mailto:hannes@hannesdev.xyz">nss123@gmail.com</a></h4>
                    </div>
                    <div className="footerChild2">
                        <h3>Help</h3>
                        <ul>
                            <li><a href="linkgoeshere">Payments</a></li>
                            <li><a href="linkgoeshere">Shipping</a></li>
                            <li><a href="linkgoeshere">Return Policy</a></li>
                            <li><a href="linkgoeshere">FAQ Topics</a></li>
                        </ul>
                    </div>
                    <div className="footerChild2">
                        <h3>Our Socials</h3>
                        <ul>
                            <li><Link href="linkgoeshere">Instagram</Link></li>
                            <li><Link href="linkgoeshere">Facebook</Link></li>
                            <li><Link href="linkgoeshere">Twitter</Link></li>
                            <li><Link href="linkgoeshere">Linkedin</Link></li>
                        </ul>
                    </div>

                </div>
                <div className="belowfooter">
                    &copy;  nss & Co. Associates, 2024 <br />
                    Develop by:md safdar,md sarim,naiyer eqbal,rifat parween
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer