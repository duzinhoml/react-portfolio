export default function Contact() {
    return(
        <div>
            <form>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Name" required/>
                    <label for="floatingInput">Name</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required/>
                    <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" required></textarea>
                    <label for="floatingTextarea">Comments</label>
                </div>

                <button class="btn btn-primary" type="submit">Submit form</button>
            </form>
        </div>
    );
}