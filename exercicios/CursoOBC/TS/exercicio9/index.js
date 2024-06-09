const GITHUB_API_URL = 'https://api.github.com';
let users = [];
let usersRepos = [];
const fetchGitHubUser = async (username) => {
    if (username !== null) {
        const userResponse = await fetch(`${GITHUB_API_URL}/users/${username}`).then(res => res.json());
        const repoResponse = await fetch(`${GITHUB_API_URL}/users/${username}/repos`).then(res => res.json());
        if (userResponse.message === "Not Found") {
            alert("O usuário " + username + " não existe!");
            return;
        }
        try {
            users.push(userResponse);
            usersRepos.push(repoResponse);
            return;
        }
        catch (error) {
            console.error(`Error fetching user ${username}:`, error);
        }
    }
    else {
        alert("Insira um nome de usuário inválido");
        return;
    }
};
function removeUser(username) {
    if (username !== null) {
        users = users.filter((u) => u.login !== username);
        alert(`O usuário "${username}" foi removido com sucesso!`);
    }
    else {
        alert("Insira um nome de usuário válido!");
    }
}
function showUsers() {
    const usersShown = users.map(item => `Nickname: ${item.login}\nNome: ${item.name}\nbio: ${item.bio}\nNúmero de repositórios: ${item.public_repos}\n\n`).join('');
    alert(usersShown);
}
function seeUserRepos(username) {
    if (username !== null) {
        const findingUser = users.findIndex(u => u.login === username);
        if (findingUser !== -1) {
            const repos = usersRepos[findingUser];
            const reposMessage = repos.map(repo => `Nome: ${repo.name}\nDescrição: ${repo.description}\n\n`).join('');
            alert(reposMessage);
        }
        else {
            alert("Não foi possível encontrar esse usuário...");
        }
    }
    else {
        alert("Usuário inválido");
    }
}
function reposSum() {
    let reposNum = 0;
    users.forEach(u => reposNum += u.public_repos);
    alert(`A soma dos repositórios de todos os usuários requisitados é ${reposNum}`);
}
function sortByRepos() {
    if (users.length <= 1) {
        alert("Não existem usuários o suficiente para fazer comparações quanto a número de repositórios!");
        return;
    }
    let usersCopy = [...users].sort((a, b) => b.public_repos - a.public_repos).slice(0, 5);
    alert(`O top 5 dos usuários requisitados que tem mais repositórios é:
        ${usersCopy.map(item => `Nickname: ${item.login}\nNome: ${item.name}\nbio: ${item.bio}\nNúmero de repositórios: ${item.public_repos}\n\n`).join('')}`);
}
let userOption = 0;
while (userOption !== 7) {
    const menu = `Menu
    1 - Requisitar usuário
    2 - Mostrar usuários requisitados
    3 - Remover um usuário da lista de usuários requisitados
    4 - Ver repositórios de um dos usuários requisitados
    5 - Ver a soma de repositórios dos usuários presentes na lista de requisitados
    6 - Ver o ranking de usuários com mais repositórios
    7 - Sair
  `;
    userOption = Number(prompt(menu));
    let username = '';
    switch (userOption) {
        case 1:
            username = prompt("Qual o nome do usuário que você deseja requisitar?");
            await fetchGitHubUser(username);
            break;
        case 2:
            showUsers();
            break;
        case 3:
            username = prompt("Qual o nome do usuário que deseja remover?");
            removeUser(username);
            break;
        case 4:
            username = prompt("Qual o nome do usuário ao qual você deseja ver os repositórios?");
            seeUserRepos(username);
            break;
        case 5:
            reposSum();
            break;
        case 6:
            sortByRepos();
            break;
        case 7:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
export {};
