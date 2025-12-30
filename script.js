// ดึงข้อมูลจากไฟล์ data.json ที่ Python สร้างไว้
fetch('data.json')
    .then(response => response.json())
    .then(products => {
        const container = document.getElementById('product-container');
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p class="price">$${product.price}</p>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading data:', error));