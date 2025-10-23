document.addEventListener('DOMContentLoaded', () => {
    const repoList = document.getElementById('repo-list');
    const repos = [
        { name: 'Repo 1', stars: 120, forks: 30 },
        { name: 'Repo 2', stars: 95, forks: 20 },
        { name: 'Repo 3', stars: 150, forks: 50 },
    ];

    repos.forEach(repo => {
        const repoItem = document.createElement('div');
        repoItem.classList.add('repo-item');
        repoItem.innerHTML = `
            <h3>${repo.name}</h3>
            <p>Stars: ${repo.stars}</p>
            <p>Forks: ${repo.forks}</p>
        `;
        repoList.appendChild(repoItem);
    });

    const animateRepoItems = () => {
        const items = document.querySelectorAll('.repo-item');
        items.forEach((item, index) => {
            item.style.opacity = 0;
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s, transform 0.5s';
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }, index * 200);
        });
    };

    animateRepoItems();
});