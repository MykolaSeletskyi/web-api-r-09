// Import contact list
import ContactList from "../ContactList/ContactList";

const Main = () => {
    return (
        <div class="col-lg-9 col-md-8 col-sm-12">
            <div class="contacts-list">
                <h5 class="title">Contact List</h5>

                <form class="ac-custom ac-checkbox ac-checkmark" autocomplete="off">
                    <div class="input-group">
                        <input type="text" class="contacts-list-search" placeholder="Search" />
                    </div>
                    <div class="unit head">
                        <div class="field name">
                            <div class="check">
                                <input id="cb1" name="cb1" type="checkbox" />
                                <label for="cb1"></label>
                                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg></div>
                Name
              </div>
                        <div class="field phone">
                            Phone
              </div>
                        <div class="field email icons">
                            Email
                <div class="btn-group pull-right" role="group">
                                <button type="button" class="btn btn-default"><span class="icon icon-folder"></span></button>

                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="icon icon-label"></span></button>

                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="#"><span class="label label-success text-dark">New</span></a></li>
                                        <li><a href="#"><span class="label label-primary text-dark">Social</span></a></li>
                                        <li><a href="#"><span class="label label-warning text-dark">Spam</span></a></li>
                                    </ul>
                                </div>
                                <button type="button" class="btn btn-default"><span class="icon icon-trash"></span></button>
                            </div>
                        </div>
                    </div>
                    <ContactList />
                </form>
            </div>
        </div>
    )
}

export default Main;