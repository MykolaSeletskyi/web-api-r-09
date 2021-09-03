const ContactItem = () => {
    return (
        <div class="unit">
            <div class="field name">
                <div class="check">
                    <input id="cb2" name="cb1" type="checkbox" />
                    <label for="cb2"></label>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>

                </div>
                <div>
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="image" class="avatar" /> Alexander Verdnam
                </div>
                <div class="lab lab-warning">Friends</div>
            </div>
            <div class="field phone">
                +1-800-600-9898
              </div>
            <div class="field email">
                example@gmail.com
              </div>
        </div>
    )
}

export default ContactItem;