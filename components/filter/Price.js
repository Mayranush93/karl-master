import React, {Component} from 'react';
import {getTrackBackground, Range} from "react-range";
import queryString from "query-string";
import withRouter from "../../helpers/withRouter";


const MIN = 0;
const MAX = 100;
const STEP = 1;

class Price extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [20, 50]
        }
    }

    handleChange = (values) => {
        const {location, navigate} = this.props;
        const queryObj = queryString.parse(location.search);
        this.setState({values});
        queryObj.min = values[0]
        queryObj.max = values[1]
        console.log(queryObj)
        const query = queryString.stringify(queryObj);
        console.log(query)
        navigate(`/shop/?${query}`);
    }

    render() {
        return (
            <div className="widget price mb-50">
                <h6 className="widget-title mb-30">Filter by Price</h6>
                <div className="widget-desc">
                    <Range
                        values={this.state.values}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        onChange={(values) => this.handleChange(values)}

                        renderTrack={({props, children}) => (

                            <div
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                style={{
                                    ...props.style,
                                    height: "36px",
                                    display: "flex",
                                    width: "100%"
                                }}>
                                <div
                                    ref={props.ref}
                                    style={{
                                        height: "5px",
                                        width: "100%",
                                        borderRadius: "4px",
                                        background: getTrackBackground({
                                            values: this.state.values,
                                            colors: ["#ccc", "#548BF4", "#ccc"],
                                            min: MIN,
                                            max: MAX
                                        }),
                                        alignSelf: "center"
                                    }}
                                >
                                    {children}
                                </div>
                            </div>
                        )}
                        renderThumb={({props, isDragged}) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: "42px",
                                    width: "42px",
                                    borderRadius: "4px",
                                    backgroundColor: "#FFF",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    boxShadow: "0px 2px 6px #AAA"
                                }}
                            >
                                <div
                                    style={{
                                        height: "16px",
                                        width: "5px",
                                        backgroundColor: isDragged ? "#548BF4" : "#CCC"
                                    }}
                                />
                            </div>
                        )}
                    />
                    <output style={{fontWeight: "bold", marginTop: "10px"}}>
                        Price:
                        <span style={{marginLeft: "10px"}}>${this.state.values[0]}</span> -
                        <span style={{marginLeft: "10px"}}> ${this.state.values[1]}</span>
                    </output>

                </div>
            </div>
        );
    }
}


export default withRouter(Price);