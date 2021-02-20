//Init Github
const github = new Github;
//init UI
const ui = new UI;

const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (e) => {

    const searchText = e.target.value;

    if (searchText !== '') {
        github.getUser(searchText).then(data => {
            if (data.profile.message === 'Not Found') {
                // Show Message
                ui.showAlert('You have no usernames with this name. Please try the correct username.', 'alert alert-danger mt-4')
            }else{
                // Show Profile
                ui.showProfile(data.profile);
                // Show Repos
                ui.showRepos(data.repos);
            }

        });
    }else{
        ui.clearProfile();
    }
});



