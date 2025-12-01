// --- BANCO DE DADOS SNEAKERS TRIM (COM PROXY ANTI-BLOQUEIO) ---
    // --- BANCO DE DADOS SNEAKERS TRIM (COM PROXY ANTI-BLOQUEIO) ---
const produtos = [
    { id: 1, nome: "Air Max 95", preco: 650.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000163368-440bfb8d6bd186e44217488802652563-480-0.webp", desc: "O clássico design anatômico em camadas.", categoria: "Sportstyle" },
    { id: 2, nome: "Isabel Marant Beckett", preco: 700.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000173355-39a1ceec78fa18bf0217497511749702-480-0.webp", desc: "Sneaker de luxo com salto anabela embutido.", categoria: "Luxury" },
    { id: 3, nome: "Timberland Premium 6-Inch", preco: 450.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000161199-0a0e9116e79895ee4d17488216097634-480-0.webp", desc: "A bota amarela original, à prova d'água.", categoria: "Boots" },
    { id: 4, nome: "Asics Gel - NYC", preco: 430.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000196838-c0e1189297775d459617531041155085-480-0.webp", desc: "Inspiração urbana de Nova York com conforto GEL.", categoria: "Sportstyle" },
    { id: 5, nome: "DC Shoes Court Graffik", preco: 410.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000173421-6ba1879173d53da27617497459811707-480-0.webp", desc: "Estilo skate clássico, robusto e durável.", categoria: "Skate" },
    { id: 6, nome: "Balenciaga Runner", preco: 780.00, oldPrice: 800.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000160714-7a871c45e5d1070f6817488922167445-480-0.webp", desc: "Estética desconstruída e futurista de luxo.", categoria: "Luxury" },
    { id: 7, nome: "Air Max 97 x Supreme", preco: 560.00, oldPrice: 600.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000163374-87ceab1d2d134fa9cb17488916290872-480-0.webp", desc: "Collab exclusiva. Design bullet train em preto.", categoria: "Collab" },
    { id: 8, nome: "Air Force 1 '07", preco: 450.00, oldPrice: 550.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000160479-099a6d4379ea4fcece17488172990245-480-0.webp", desc: "O ícone branco que combina com tudo.", categoria: "Casual" },
    { id: 9, nome: "Dr. Martens Adrian", preco: 600.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000227817-15f908636d2648855417562588619851-480-0.webp", desc: "Loafer clássico com a durabilidade AirWair.", categoria: "Loafer" },
    { id: 10, nome: "Asics x JJJJOUND Kayano 14", preco: 500.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000228036-2c170b6618de73d07a17562563840911-480-0.webp", desc: "Minimalismo premium e estética de corrida retrô.", categoria: "Collab" },
    { id: 11, nome: "Dior B30", preco: 750.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000228026-cf32658ed9d527b38f17562560133307-480-0.webp", desc: "Luxo esportivo com o logo CD refletivo.", categoria: "Luxury" },
    { id: 12, nome: "Timberland x Louis Vuitton", preco: 950.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000228026-cf32658ed9d527b38f17562560133307-480-0.webp", desc: "A colaboração mais luxuosa e robusta do ano.", categoria: "Exclusive" },
    { id: 13, nome: "Travis Scott x AJ1 Phantom", preco: 850.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000227981-ac2d8eb8eb8da41f3f17562543867642-480-0.webp", desc: "Swoosh invertido em camurça preta all-black.", categoria: "Hype" },
    { id: 14, nome: "BALENCIAGA Strike Leather", preco: 1600.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000227958-20cfb0c928bc9e62aa17562538936832-480-0.webp", desc: "Visual militar imponente em couro.", categoria: "Boots" },
    { id: 15, nome: "Kobe 6 Protro 'Grinch'", preco: 700.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/picsart_25-08-16_16-05-21-899-fdf2835c32df7222b117562519752768-480-0.webp", desc: "Performance de elite nas quadras. Edição Grinch.", categoria: "Basketball" },
    { id: 16, nome: "Rick Owens x DM Pentagram", preco: 900.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/picsart_25-08-16_10-19-48-473-1e02c839ec980af03d17559167955439-480-0.webp", desc: "Amarração Jumbo Lace em formato de pentagrama.", categoria: "Avant-Garde" },
    { id: 17, nome: "Asics Gel - KAHANA 8", preco: 430.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000196780-fe7742c6ff60e4d42a17531036007976-480-0.webp", desc: "Tecnologia de trilha robusta adaptada para as ruas.", categoria: "Sportstyle" },
    { id: 18, nome: "Asics Gel - KAYANO 14", preco: 430.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000196762-7d0a19b1308975e22717531032441198-480-0.webp", desc: "Estabilidade lendária com estética dos anos 2000.", categoria: "Running" },
    { id: 19, nome: "Maison Margiela Replica", preco: 750.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000173754-65128ea7ede878fa3517498376001731-480-0.webp", desc: "Design clássico 'German Army Trainer' de luxo.", categoria: "Luxury" },
    { id: 20, nome: "Arena Balenciaga High", preco: 650.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000173754-65128ea7ede878fa3517498376001731-480-0.webp", desc: "Couro texturizado premium em cano alto.", categoria: "Luxury" },
    { id: 21, nome: "Puma Speedcat OG", preco: 500.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000173363-5bcc8f824c28fca75917498342650844-480-0.webp", desc: "Ícone do automobilismo e do street style.", categoria: "Retro" },
    { id: 22, nome: "Yeezy Desert Boot", preco: 680.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000173302-333f707bcf36908d3217497806395682-480-0.webp", desc: "Estética pós-apocalíptica por Kanye West.", categoria: "Hype" },
    { id: 23, nome: "Air Force 1 Low x CPFM", preco: 520.00, img: "https://acdn-us.mitiendanube.com/stores/005/601/740/products/1000173343-69ac34ce7918e5a23817497801979569-480-0.webp", categoria: "Collab" },
    { id: 24, nome: "Maison Margiela Future", preco: 930.00, img: "https://wsrv.nl/?url=img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221168M236003_1/maison-margiela-white-future-high-top-sneakers.jpg", desc: "Design futurista minimalista sem cadarços aparentes.", categoria: "Avant-Garde" },
    { id: 25, nome: "BALENCIAGA Strike Canvas", preco: 800.00, img: "https://wsrv.nl/?url=balenciaga.dam.kering.com/m/58d0850672012451/Large-693955210EA1000_F.jpg", desc: "Versão robusta em lona preta.", categoria: "Boots" },
    
];

function carregarCatalogo() {
    const container = document.getElementById('products-container');
    if (container) {
        container.innerHTML = "";
        produtos.forEach(produto => {
            let precoHtml;
            let badgeHtml = "";
            if (produto.oldPrice) {
                const pct = Math.round(((produto.oldPrice - produto.preco) / produto.oldPrice) * 100);
                badgeHtml = `<span class="badge bg-danger position-absolute top-0 end-0 m-3 shadow">-${pct}% OFF</span>`;
                precoHtml = `<small class="text-decoration-line-through text-muted">R$ ${produto.oldPrice.toFixed(2)}</small> <p class="fw-bold fs-5 text-danger mb-0">R$ ${produto.preco.toFixed(2)}</p>`;
            } else {
                precoHtml = `<p class="fw-bold fs-5 mb-0">R$ ${produto.preco.toFixed(2)}</p>`;
            }
            const card = `
                <div class="col">
                    <div class="card h-100 border-0 shadow-sm product-card">
                        ${badgeHtml}
                        <div class="card-img-wrapper" style="height: 250px; display: flex; align-items: center; justify-content: center; background: #ffffff; padding: 20px;">
                            <img src="${produto.img}" class="img-fluid" style="max-height: 100%; object-fit: contain;" alt="${produto.nome}" onerror="this.src='https://via.placeholder.com/300?text=Carregando...'">
                        </div>
                        <div class="card-body">
                            <small class="text-muted text-uppercase" style="font-size: 0.8rem;">${produto.categoria}</small>
                            <h6 class="card-title fw-bold text-dark mt-1 text-truncate">${produto.nome}</h6>
                            <div class="mt-2">${precoHtml}</div>
                            <a href="detalhe.html?id=${produto.id}" class="btn btn-dark w-100 mt-3">Ver Detalhes</a>
                        </div>
                    </div>
                </div>`;
            container.innerHTML += card;
        });
    }
}

function carregarDetalhe() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const produto = produtos.find(p => p.id == id);
    if (produto && document.getElementById('detail-name')) {
        document.getElementById('detail-img').src = produto.img;
        document.getElementById('detail-name').innerText = produto.nome;
        document.getElementById('detail-category').innerText = produto.categoria;
        document.getElementById('detail-desc').innerText = produto.desc;
        const precoElement = document.getElementById('detail-price');
        if(produto.oldPrice) {
            precoElement.innerHTML = `<span class="text-decoration-line-through text-muted fs-4 me-2">R$ ${produto.oldPrice.toFixed(2)}</span> <span class="text-danger fw-bold display-6">R$ ${produto.preco.toFixed(2)}</span>`;
        } else {
            precoElement.innerHTML = `<span class="fw-bold display-6">R$ ${produto.preco.toFixed(2)}</span>`;
        }
        document.getElementById('btn-add-cart').onclick = () => {
            const tamanho = document.getElementById('size-select').value;
            if(tamanho === "Selecione") return alert("Selecione um tamanho.");
            produto.tamanhoEscolhido = tamanho; 
            localStorage.setItem('produtoSelecionado', JSON.stringify(produto));
            window.location.href = 'checkout.html';
        };
    }
}

function carregarCheckout() {
    const item = JSON.parse(localStorage.getItem('produtoSelecionado'));
    const checkoutArea = document.getElementById('order-summary');
    if (checkoutArea && item) {
        checkoutArea.innerHTML = `
            <li class="list-group-item d-flex justify-content-between lh-sm"><div><h6 class="my-0">${item.nome}</h6><small class="text-muted">Tam: ${item.tamanhoEscolhido}</small></div><span class="text-muted">R$ ${item.preco.toFixed(2)}</span></li>
            <li class="list-group-item d-flex justify-content-between"><span>Total (BRL)</span><strong>R$ ${item.preco.toFixed(2)}</strong></li>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    carregarCatalogo(); carregarDetalhe(); carregarCheckout();
    const form = document.getElementById('checkout-form');
    if (form) form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        if(nome) {
            document.getElementById('checkout-container').innerHTML = `<div class="alert alert-success text-center py-5 shadow"><h1 class="display-1">✅</h1><h2 class="alert-heading fw-bold">Pedido Confirmado!</h2><p class="lead mt-3">Obrigado, ${nome}.</p><a href="index.html" class="btn btn-dark btn-lg mt-3">Voltar</a></div>`;
            localStorage.removeItem('produtoSelecionado');
        }
    });
});


function carregarCatalogo() {
    const container = document.getElementById('products-container');
    if (container) {
        container.innerHTML = "";
        produtos.forEach(produto => {
            let precoHtml;
            let badgeHtml = "";
            if (produto.oldPrice) {
                const pct = Math.round(((produto.oldPrice - produto.preco) / produto.oldPrice) * 100);
                badgeHtml = `<span class="badge bg-danger position-absolute top-0 end-0 m-3 shadow">-${pct}% OFF</span>`;
                precoHtml = `<small class="text-decoration-line-through text-muted">R$ ${produto.oldPrice.toFixed(2)}</small> <p class="fw-bold fs-5 text-danger mb-0">R$ ${produto.preco.toFixed(2)}</p>`;
            } else {
                precoHtml = `<p class="fw-bold fs-5 mb-0">R$ ${produto.preco.toFixed(2)}</p>`;
            }
            const card = `
                <div class="col">
                    <div class="card h-100 border-0 shadow-sm product-card">
                        ${badgeHtml}
                        <div class="card-img-wrapper" style="height: 250px; display: flex; align-items: center; justify-content: center; background: #ffffff; padding: 20px;">
                            <img src="${produto.img}" class="img-fluid" style="max-height: 100%; object-fit: contain;" alt="${produto.nome}" onerror="this.src='https://via.placeholder.com/300?text=Carregando...'">
                        </div>
                        <div class="card-body">
                            <small class="text-muted text-uppercase" style="font-size: 0.8rem;">${produto.categoria}</small>
                            <h6 class="card-title fw-bold text-dark mt-1 text-truncate">${produto.nome}</h6>
                            <div class="mt-2">${precoHtml}</div>
                            <a href="detalhe.html?id=${produto.id}" class="btn btn-dark w-100 mt-3">Ver Detalhes</a>
                        </div>
                    </div>
                </div>`;
            container.innerHTML += card;
        });
    }
}

function carregarDetalhe() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const produto = produtos.find(p => p.id == id);
    if (produto && document.getElementById('detail-name')) {
        document.getElementById('detail-img').src = produto.img;
        document.getElementById('detail-name').innerText = produto.nome;
        document.getElementById('detail-category').innerText = produto.categoria;
        document.getElementById('detail-desc').innerText = produto.desc;
        const precoElement = document.getElementById('detail-price');
        if(produto.oldPrice) {
            precoElement.innerHTML = `<span class="text-decoration-line-through text-muted fs-4 me-2">R$ ${produto.oldPrice.toFixed(2)}</span> <span class="text-danger fw-bold display-6">R$ ${produto.preco.toFixed(2)}</span>`;
        } else {
            precoElement.innerHTML = `<span class="fw-bold display-6">R$ ${produto.preco.toFixed(2)}</span>`;
        }
        document.getElementById('btn-add-cart').onclick = () => {
            const tamanho = document.getElementById('size-select').value;
            if(tamanho === "Selecione") return alert("Selecione um tamanho.");
            produto.tamanhoEscolhido = tamanho; 
            localStorage.setItem('produtoSelecionado', JSON.stringify(produto));
            window.location.href = 'checkout.html';
        };
    }
}

function carregarCheckout() {
    const item = JSON.parse(localStorage.getItem('produtoSelecionado'));
    const checkoutArea = document.getElementById('order-summary');
    if (checkoutArea && item) {
        checkoutArea.innerHTML = `
            <li class="list-group-item d-flex justify-content-between lh-sm"><div><h6 class="my-0">${item.nome}</h6><small class="text-muted">Tam: ${item.tamanhoEscolhido}</small></div><span class="text-muted">R$ ${item.preco.toFixed(2)}</span></li>
            <li class="list-group-item d-flex justify-content-between"><span>Total (BRL)</span><strong>R$ ${item.preco.toFixed(2)}</strong></li>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    carregarCatalogo(); carregarDetalhe(); carregarCheckout();
    const form = document.getElementById('checkout-form');
    if (form) form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        if(nome) {
            document.getElementById('checkout-container').innerHTML = `<div class="alert alert-success text-center py-5 shadow"><h1 class="display-1">✅</h1><h2 class="alert-heading fw-bold">Pedido Confirmado!</h2><p class="lead mt-3">Obrigado, ${nome}.</p><a href="index.html" class="btn btn-dark btn-lg mt-3">Voltar</a></div>`;
            localStorage.removeItem('produtoSelecionado');
        }
    });
});