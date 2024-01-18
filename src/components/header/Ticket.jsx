import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "../css/ticket.css"
import Nav from 'react-bootstrap/Nav';
import * as Icon from 'react-bootstrap-icons';

function Ticket() {
    const handleClickClose = () => {
        const overlay = document.querySelector('.ticket-search-active')
        overlay.classList.remove('ticket-search-active')


    }


    return (
        <div className='space'>
            <div className='close-btn'>
                <Icon.XCircle onClick={handleClickClose} />
            </div>
            <div className='row '>
                <div className="col-6">
                    <div className="container">
                        <div className='description'>
                            <h3 className='text-black'>Order A ticket</h3>
                        </div>
                        <h2 className='mt-5'>LOCATION</h2>
                        <FloatingLabel controlId="floatingSelect" >
                            <Form.Select aria-label="Floating   ">
                                <option>Cinema Tysons Corner</option>
                                <option value="1">Cinema</option>
                                <option value="2">Cinema Tysons</option>
                                <option value="3">Cinema Tysons Corner</option>
                            </Form.Select>
                        </FloatingLabel>
                        <h2 className='mt-3'>MOVIE</h2>
                        <FloatingLabel controlId="floatingSelect" >
                            <Form.Select aria-label="Floating   ">
                                <option>Dead pool</option>
                                <option value="1">THE BATTLE OF ALGIERS (DI ALGERI)</option>
                                <option value="2"> LORD OF THE RINGS: THE RETURN OF THE KINGS</option>
                                <option value="3">Cinema Tysons Corner</option>
                            </Form.Select>
                        </FloatingLabel>
                        <h2 className='mt-3'>DATE</h2>
                        <FloatingLabel className='' controlId="floatingSelect" >
                            <Form.Control type="date" />
                        </FloatingLabel>
                        <h2 className='mt-3'>TIME</h2>
                        <Nav className=" w-100 text-uppercase ticket-nav mb-5">
                            <Nav.Link className='text-black ' href="#link">11.50  </Nav.Link>
                            <Nav.Link className='text-black ' href="#link">13.40  </Nav.Link>
                            <Nav.Link className='text-black ' href="#link">16.35  </Nav.Link>
                            <Nav.Link className='text-black ' href="#link">17.35  </Nav.Link>
                            <Nav.Link className='text-black ' href="#link">19.50  </Nav.Link>
                            <Nav.Link className='text-black ' href="#link">21.50  </Nav.Link>
                        </Nav>
                    </div>
                </div>
                <div className="col-6">
                    <div className="continer mx-5">
                        <h3 className='text-black'>YOUR INFORMATION
                        </h3>
                        <div className="order-details fs-3 mt-5">
                            <span>Location:</span>
                            <p> Cinema Tysons </p>
                            <span>Time:</span>
                            <p>2016.3.8 18:30

                            </p>
                            <span>Seat:</span>
                            <div>
                                Tickets:
                                <span>0</span>
                            </div>
                            <div>
                                Total:
                                <span>$0
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}

export default Ticket;