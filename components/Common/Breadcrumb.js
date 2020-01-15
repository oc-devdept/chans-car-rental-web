import React, { Component } from 'react';
import Link from 'next/link';

class Breadcrumb extends Component {
    render() {
        return (
            <div className="page-title-area">
                <div className="container">
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        { 
                            this.props.type && 
                            <li style={{textTransform: "capitalize"}}>
                                <Link href={`/vehicles/${this.props.type}`}>
                                    <a>{this.props.type}</a>
                                </Link>
                            </li> 
                        }
                        <li style={{textTransform: "capitalize"}}>
                            {this.props.title}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;
