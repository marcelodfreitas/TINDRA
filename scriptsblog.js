const newsData = [
    { imgSrc: './imgs/01.webp', title: 'Confira a lista dos carros novos mais vendidos no primeiro trimestre de 2025', desc: 'Fenabrave divulga lista dos carros novos mais vendidos entre janeiro e março de 2025 e projeções para o ano.', link: 'https://olhardigital.com.br/2025/04/06/carros-e-tecnologia/confira-a-lista-dos-carros-novos-mais-vendidos-no-primeiro-trimestre-de-2025/' },
    { imgSrc: './imgs/02.jpg', title: 'Carros elétricos: esse lugar já tem mais carregadores que bombas de gasolina', desc: 'Com a crescente adoção de carros elétricos, o estado da Califórnia se destaca pelas várias instalações de infraestrutura de carregamento.', link: 'https://olhardigital.com.br/2025/04/04/carros-e-tecnologia/carros-eletricos-esse-lugar-ja-tem-mais-carregadores-que-bombas-de-gasolina/' },
    { imgSrc: './imgs/03.jpg', title: 'Carros elétricos podem piorar problema que eles deveriam resolver', desc: 'Pesquisadores revelaram que os carros elétricos podem piorar as emissões de CO₂, a menos que sejam movidos a energias renováveis.', link: 'https://olhardigital.com.br/2025/04/06/carros-e-tecnologia/confira-a-lista-dos-carros-novos-mais-vendidos-no-primeiro-trimestre-de-2025/' },
    { imgSrc: './imgs/04.jpg', title: 'Gigante automotiva domina lista dos carros mais seguros do Brasil', desc: 'A segurança é crucial na hora de escolher um carro, e no Brasil, alguns modelos se destacam por oferecerem proteção de ponta para motoristas e passageiros.', link: 'https://olhardigital.com.br/2025/04/14/carros-e-tecnologia/gigante-automotiva-domina-lista-dos-carros-mais-seguros-do-brasil/' },
    { imgSrc: './imgs/05.png', title: '8 carros icônicos da Chevrolet que fizeram história no Brasil', desc: 'Lista conta com veículos lançados desde os anos 1920 até carros mais atuais, que estrearam no mercado nos anos 2000.', link: 'https://olhardigital.com.br/2025/04/23/carros-e-tecnologia/8-carros-iconicos-da-chevrolet-que-fizeram-historia-no-brasil/' },
    { imgSrc: './imgs/06.jpg', title: 'Tesla perde vendas até no "paraíso" dos carros elétricos', desc: 'A montadora de Elon Musk vê seus números caírem na Noruega, país onde a adoção por carros elétricos é massiva.', link: 'https://olhardigital.com.br/2025/04/02/carros-e-tecnologia/tesla-perde-vendas-ate-no-paraiso-dos-carros-eletricos/' },
    { imgSrc: './imgs/07.jpg', title: 'Como os criminosos clonam as placas de carros e motos?', desc: 'Descubra como criminosos clonam placas de carros e motos, quais são os riscos para o verdadeiro dono e o que fazer se for vítima desse golpe.', link: 'https://olhardigital.com.br/2025/04/14/carros-e-tecnologia/como-os-criminosos-clonam-as-placas-de-carros-e-motos/' },
    { imgSrc: './imgs/08.png', title: 'Entenda de vez as diferenças entre carros híbridos: leve, convencional e plug-in', desc: 'Descubra as diferenças entre os carros híbridos e saiba qual modelo se adapta melhor ao seu estilo de direção e necessidades.', link: 'https://olhardigital.com.br/2025/03/27/carros-e-tecnologia/entenda-de-vez-as-diferencas-entre-carros-hibridos-leve-convencional-e-plug-in/' },
    { imgSrc: './imgs/09.jpg', title: 'Top 5 carros da BYD que você precisa conhecer', desc: 'BYD é uma montadora chinesa de veículos que tem ocupado um espaço cada vez maior no Brasil e no mundo; confira alguns carros da marca', link: 'https://olhardigital.com.br/2025/04/10/carros-e-tecnologia/top-5-carros-da-byd-que-voce-precisa-conhecer/' }
];

let currentPage = 1;
const newsPerPage = 3;

function renderNews() {
    const newsContainer = document.getElementById('news-container');
    const startIndex = (currentPage - 1) * newsPerPage;
    const endIndex = currentPage * newsPerPage;
    const currentNews = newsData.slice(startIndex, endIndex);

    newsContainer.innerHTML = '';
    currentNews.forEach(news => {
        const newsElement = `
            <div class="flex flex-col bg-white">
                <img src="${news.imgSrc}" class="w-full rounded h-48 object-cover" alt="Imagem da notícia">
                <div class="p-4 flex flex-col flex-grow">
                    <h2 class="text-lg font-semibold mb-2">${news.title}</h2>
                    <p class="text-sm text-gray-600 flex-grow">${news.desc}</p>
                    <a href="${news.link}" target="_blank"
                        class="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm text-center">
                        Ler mais
                    </a>
                </div>
            </div>
        `;
        newsContainer.innerHTML += newsElement;
    });

    // Atualizando o indicador de página
    document.getElementById('pageIndicator').innerText = `Página ${currentPage}`;
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage * newsPerPage >= newsData.length;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderNews();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage * newsPerPage < newsData.length) {
        currentPage++;
        renderNews();
    }

    window.scrollTo(0, 0);
});


renderNews();