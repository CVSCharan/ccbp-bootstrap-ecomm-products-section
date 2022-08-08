import './App.css';

function App() {
  return (
     <div className="bg-container">
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5">
                    <h1 className="h1">Our Products</h1>
                </div>
                <div className="col-12 col-md-6">
                    <div className="card1 d-flex flex-column justify-content-end">
                        <h1 className="h2">Smart Headphones</h1>
                        <p className="p1">Headphones with deep bass, sound,touch...</p>
                        <button type="button" className="butn btn-light" data-toggle="modal" data-target="#exampleModal">
                            View Details
                        </button>
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="m-h" id="exampleModalLabel">Sony WH-1000VM4 Noise Cancelling Headphones</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="m-body">
                                        <p>
                                            Get Best Smat Headphones Prices Onlin in <span className="IND">INDIA</span>. Select from best range
                                            of Headphones from most Popular Brands...
                                        </p>
                                        <p>
                                            <span className="b-t">Voice Assistant: </span>Alexa, Google Assistant & Siri.<br />
                                            <span className="b-t">Smart Listerining: </span>Ambient sound with best noise cancellation.<br />
                                            <span className="b-t">Long Battery Life: </span>A single charge provides 30 hours of palytime.<br />
                                            <span className="b-t">Quick Charging: </span>A charge of 5 min for a 5 hours playback.<br />
                                            <span className="b-t">Touch Controls: </span>Change the track with your fingertips.
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="butn1 btn-outline-gray">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="card2 d-flex flex-column justify-content-end">
                        <h1 className="h2">Laptops</h1>
                        <p className="p1">Explore vast selection of laptops...</p>
                        <button type="button" className="butn btn-light" data-toggle="modal" data-target="#section1">
                            View Details
                        </button>
                        <div className="modal fade" id="section1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="m-h" id="exampleModalLabel">Inspiron 14 5490 core i5 laptop.</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            Get Best Smat Headphones Prices Onlin in <span className="IND">INDIA</span>. Select from best range
                                            of Headphones from most Popular Brands...
                                        </p>
                                        <p>
                                            <span className="b-t">Performance: </span>Core i5 3rd Gen, 2.6Ghz, 4GB RAM.<br />
                                            <span className="b-t">Storage: </span>500GB HDD, SATA, 7200 RPM.<br />
                                            <span className="b-t">Battery: </span>Li-ION 6Cell.<br />
                                            <span className="b-t">Design: </span>14.0 Inches. 1366 X 768, 2.07 Kg, 34 Mm Thick.
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="butn1 btn-outline-gray">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
