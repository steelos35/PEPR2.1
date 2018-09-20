import React from 'react';

//Set Up Header, Hero, and Nav to render on every page
function Header(props) {
    const { links, homeView } = props;
    return (
        <div className="header">
            <h1 className="title" onClick={homeView}>PEPR</h1>
            <p className="tag">Physcial Education Performance Review</p>
            <div className="nav">
                {links.map(link => {
                    return <button
                        key={link}
                        className="link"
                        onClick={() => props.onClick(link)}
                    >{link}</button>
                })}
            </div>
        </div>
    )
}

export default Header;