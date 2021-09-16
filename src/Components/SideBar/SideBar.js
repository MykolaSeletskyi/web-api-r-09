const SideBar = ({ contactsCounter , Work, Family, Private, Friend}) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="contacts-labels">
                <div className="title">All contacts<span>{contactsCounter}</span></div>
                <div className="list">
                    <div className="input-group">
                        <input type="text" className="contacts-search" placeholder="Search" />
                    </div>
                    <div className="head">Labels</div>
                    <div className="unit">
                        <div className="lab lab-success">Work</div><span>{Work}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-primary">Family</div><span>{Family}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-danger">Private</div><span>{Private}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-warning">Friends</div><span>{Friend}</span>
                    </div>
                    <button type="button" className="btn btn-primary font-weight-700">Add new label</button>
                </div>
            </div>
        </div>
    )
}

export default SideBar;