window.goToLogin = () => {
    $('#gatewaySection').fadeOut(300, function() {
        $('#loginSection').fadeIn(300);
    });
};

window.goToAttendance = () => {
    $('#gatewaySection').fadeOut(300, function() {
        $('#attendanceApp').css('display', 'flex').hide().fadeIn(300);
    });
};

window.goBackToGateway = () => {
    location.reload(); 
};

const menuData = {
    "HOT COFFEE": [
        {name: "Espresso Roast", price: 85, trending: true}, 
        {name: "Vanilla Latte", price: 135, trending: true},
        {name: "Caramel Macchiato", price: 145, trending: true},
        {name: "Spanish Latte", price: 140, trending: true},
        {name: "Toffee Nut Latte", price: 155, trending: true}, 
        {name: "Honey Almond Latte", price: 160, trending: true},
        {name: "Vienna Coffee", price: 165, trending: true},
        {name: "Butterscotch Latte", price: 150, trending: true},
        {name: "Salted Caramel Brew", price: 145, trending: true}, 
        {name: "White Mocha", price: 150, trending: true},
        {name: "Cappuccino", price: 125, trending: false}, 
        {name: "Americano", price: 95, trending: false},
        {name: "Flat White", price: 130, trending: false}, 
        {name: "Hazelnut Latte", price: 140, trending: false},
        {name: "Mocha Java", price: 145, trending: false}, 
        {name: "Cinnamon Roast", price: 120, trending: false},
        {name: "Coconut Hot Mocha", price: 145, trending: false}, 
        {name: "Irish Cream Coffee", price: 150, trending: false},
        {name: "Peppermint Mocha", price: 155, trending: false}, 
        {name: "Dark Roast Black", price: 90, trending: false},
        {name: "Macadamia Latte", price: 155, trending: false}, 
        {name: "Oatmilk Honey Coffee", price: 170, trending: false},
        {name: "Pumpkin Spice Hot", price: 160, trending: false}, 
        {name: "Steamed Cold Brew", price: 140, trending: false},
        {name: "Brown Sugar Latte", price: 145, trending: false}, 
        {name: "French Vanilla", price: 130, trending: false},
        {name: "Mocha Bianca", price: 155, trending: false}, 
        {name: "Cortado", price: 115, trending: false},
        {name: "Affogato Style Hot", price: 160, trending: false}, 
        {name: "Chai Coffee Latte", price: 150, trending: false}
    ],
    "ICED COFFEE": [
        {name: "Sea Salt Latte", price: 155, trending: true}, 
        {name: "Iced Spanish Latte", price: 150, trending: true},
        {name: "Dirty Matcha", price: 165, trending: true}, 
        {name: "Cloud Macchiato", price: 175, trending: true},
        {name: "Caramel Cold Foam", price: 165, trending: true}, 
        {name: "Pistachio Cold Brew", price: 180, trending: true},
        {name: "Vanilla Sweet Cream", price: 155, trending: true}, 
        {name: "Cookie Butter Iced", price: 180, trending: true},
        {name: "Tiramisu Cold Brew", price: 185, trending: true}, 
        {name: "Chocnut Iced Coffee", price: 145, trending: true},
        {name: "Iced Americano", price: 105, trending: false}, 
        {name: "Iced Latte", price: 140, trending: false},
        {name: "Nitro Cold Brew", price: 170, trending: false}, 
        {name: "Iced White Mocha", price: 160, trending: false},
        {name: "Iced Hazelnut Brew", price: 145, trending: false}, 
        {name: "Iced Mocha Bliss", price: 150, trending: false},
        {name: "Iced Toffee Nut", price: 155, trending: false}, 
        {name: "Iced Cinnamon Latte", price: 145, trending: false},
        {name: "Blueberry Iced Brew", price: 165, trending: false}, 
        {name: "Strawberry Iced Latte", price: 170, trending: false},
        {name: "Iced Irish Cream", price: 160, trending: false}, 
        {name: "Peanut Butter Iced", price: 175, trending: false},
        {name: "Coconut Iced Latte", price: 155, trending: false}, 
        {name: "Iced Macchiato", price: 140, trending: false},
        {name: "Condensed Milk Iced", price: 130, trending: false}, 
        {name: "Minty Iced Mocha", price: 165, trending: false},
        {name: "Iced Black Forest", price: 180, trending: false}, 
        {name: "Honey Lemon Iced", price: 145, trending: false},
        {name: "Salted Vanilla Brew", price: 160, trending: false}, 
        {name: "Iced Vienna", price: 170, trending: false}
    ],
    "FRAPPES": [
        {name: "Java Chip", price: 175, trending: true}, 
        {name: "Caramel Frappe", price: 170, trending: true},
        {name: "Strawberry Cream", price: 180, trending: true}, 
        {name: "Ube Cheesecake", price: 190, trending: true},
        {name: "Double Choco Chip", price: 185, trending: true}, 
        {name: "Matcha Frappe", price: 185, trending: true},
        {name: "Red Velvet Oreo", price: 195, trending: true}, 
        {name: "Cookies & Cream", price: 175, trending: true},
        {name: "Mango Graham", price: 190, trending: true}, 
        {name: "Blueberry Cheesecake", price: 195, trending: true},
        {name: "Mocha Frappe", price: 170, trending: false},
        {name: "Vanilla Bean", price: 165, trending: false},
        {name: "Dark Choco Frappe", price: 180, trending: false}, 
        {name: "Pistachio Cream", price: 195, trending: false},
        {name: "Hazelnut Frappe", price: 185, trending: false}, 
        {name: "Salted Caramel Frappe", price: 180, trending: false},
        {name: "Banana Choco Frappe", price: 185, trending: false}, 
        {name: "Avocado Frappe", price: 200, trending: false},
        {name: "Butterscotch Frappe", price: 185, trending: false}, 
        {name: "White Mocha Frappe", price: 190, trending: false},
        {name: "Taro Frappe", price: 175, trending: false}, 
        {name: "Espresso Frappe", price: 170, trending: false},
        {name: "Oreo Mint Frappe", price: 195, trending: false}, 
        {name: "Buko Pandan Frappe", price: 185, trending: false},
        {name: "KitKat Frappe", price: 210, trending: false}, 
        {name: "Milo Dinosaur Frappe", price: 190, trending: false},
        {name: "Nutella Overload", price: 220, trending: false},
        {name: "Graham Swirl", price: 185, trending: false},
        {name: "Cookie Butter Frappe", price: 215, trending: false},
         {name: "Choco Butternut", price: 195, trending: false}
    ],
    "MILK TEA": [
        {name: "Okinawa Pearl", price: 110, trending: true}, 
        {name: "Wintermelon", price: 100, trending: true},
        {name: "Brown Sugar Boba", price: 130, trending: true}, 
        {name: "Cheesecake MT", price: 135, trending: true},
        {name: "Thai Milk Tea", price: 110, trending: true}, 
        {name: "Matcha Milk Tea", price: 125, trending: true},
        {name: "Dark Choco MT", price: 130, trending: true}, 
        {name: "Panda Milk Tea", price: 140, trending: true},
        {name: "Hershey's Choco", price: 145, trending: true}, 
        
        {name: "Nutella MT", price: 150, trending: true},
        {name: "Classic Milk Tea", price: 95, trending: false}, 
        {name: "Hokkaido MT", price: 110, trending: false},
        {name: "Salted Caramel MT", price: 120, trending: false}, 
        {name: "Taro Milk Tea", price: 105, trending: false},
        {name: "Hazelnut MT", price: 120, trending: false}, 
        {name: "Red Velvet MT", price: 135, trending: false},
        {name: "Mango Milk Tea", price: 125, trending: false}, 
        {name: "Blueberry MT", price: 125, trending: false},
        {name: "Strawberry MT", price: 125, trending: false}, 
        {name: "Pistachio MT", price: 145, trending: false},
        {name: "Honey Dew MT", price: 115, trending: false}, 
        {name: "Cookies & Cream MT", price: 130, trending: false},
        {name: "Peppermint MT", price: 125, trending: false}, 
        {name: "Ube MT", price: 115, trending: false},
        {name: "Lychee Milk Tea", price: 110, trending: false},
         {name: "White Rabbit MT", price: 145, trending: false},
        {name: "Java Chip MT", price: 140, trending: false}, 
        {name: "Almond Milk Tea", price: 120, trending: false},
        {name: "Caramel Macchiato MT", price: 145, trending: false}, 
        {name: "Rocky Road MT", price: 150, trending: false}
    ],
    "CRAFT SNACKS": [
        {name: "Bavarian Donut", price: 60, trending: true}, 
        {name: "Pepperoni Pizza", price: 345, trending: true},
        {name: "Butter Croissant", price: 85, trending: true}, 
        {name: "Nachos Overload", price: 180, trending: true},
        {name: "Chicken Wings (6pcs)", price: 280, trending: true},
         {name: "Cheesecake Slice", price: 165, trending: true},
        {name: "Carbonara Pasta", price: 220, trending: false}, 
        {name: "Beef Burger", price: 185, trending: false},
        {name: "French Fries XL", price: 120, trending: false}, 
        {name: "Cheese Sticks", price: 95, trending: false},
        {name: "Ham & Cheese Sand", price: 110, trending: false}, 
        {name: "Clubhouse Sand", price: 210, trending: false},
        {name: "Blueberry Muffin", price: 90, trending: false}, 
        {name: "Chocolate Muffin", price: 90, trending: false},
        {name: "Belgian Waffle", price: 125, trending: false}, 
        {name: "Quesadilla", price: 175, trending: false},
        {name: "Chicken Nuggets", price: 150, trending: false}, 
        {name: "Onion Rings", price: 110, trending: false},
        {name: "Pancit Bihon", price: 180, trending: false}, 
        {name: "Baked Mac", price: 195, trending: false},
        {name: "Tuna Pesto", price: 210, trending: false}, 
        {name: "Garlic Bread", price: 75, trending: false},
        {name: "Red Velvet Cupcake", price: 85, trending: false}, 
        {name: "Choco Lava Cake", price: 145, trending: false},
        {name: "Cinnamon Roll", price: 105, trending: false},
        {name: "S'mores Dip", price: 165, trending: false},
        {name: "Tacos (2pcs)", price: 190, trending: false}, 
        {name: "Mozzarella Sticks", price: 220, trending: false},
        {name: "Fish & Chips", price: 245, trending: false}, 
        {name: "Sausage Platter", price: 310, trending: false}
    ]
};

class PosSystem {
    constructor() {
        this.cart = [];
        this.tempItem = null;
        this.currentSize = "Small";
        this.extraPrice = 0;
        this.themeColor = '#9d4edd'; 
    }

    addItem(name, price, size, category) {
        this.cart.push({ name, price, size, category });
        this.updateUI();
        this.notify(`Added ${name} to order`);
    }

    removeItem(index) {
        this.cart.splice(index, 1);
        this.updateUI();
    }

    calculateTotal() {
        return this.cart.reduce((sum, item) => sum + item.price, 0);
    }

    clearCart() {
        this.cart = [];
        this.updateUI();
    }

    updateUI() {
        $('#count-cart').text(this.cart.length);
        const total = this.calculateTotal();
        const cartHtml = this.cart.length > 0 ? this.cart.map((item, index) => `
        <div class="cart-item" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; padding: 10px; background: rgba(255,255,255,0.05); border-radius: 8px;">
        <div>
        <strong style="display:block;">${item.name}</strong>
        <small style="color: #bbb;">Size: ${item.size}</small>
        </div>
        <div style="display:flex; align-items:center; gap: 15px;">
        <span>₱${item.price}</span>
        <button onclick="pos.removeItem(${index})" style="color:#ff4d4d; background:none; border:none; cursor:pointer; font-size: 1.2rem;">&times;</button>
        </div>
        </div>
        `).join('') : '<p style="text-align:center; opacity:0.5;">Your cart is empty</p>';

        $('#cartList').html(cartHtml);
        $('#totalPrice').text(total);
    }

    notify(msg) {
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: msg,
            showConfirmButton: false,
            timer: 1500,
            background: '#240046',
            color: '#fff',
            iconColor: '#ff9e00'
        });
    }

    alertError(msg) {
        Swal.fire({ icon: 'error', title: 'Oops!', text: msg, background: '#1a1a1a', color: '#fff', confirmButtonColor: this.themeColor });
    }
}

const pos = new PosSystem();

window.login = () => {
    const u = $('#username').val();
    const p = $('#password').val();

    if (!u || !p) { 
        pos.alertError('Please enter your username and password');
        return; 
    }

    Swal.fire({
        title: 'Authenticating...',
        timer: 1000,
        didOpen: () => { Swal.showLoading(); },
        background: '#1a1a1a',
        color: '#fff'
    }).then(() => {
        $('#loginSection').fadeOut(300, function() {
            $('#mainApp').css('display', 'flex').hide().fadeIn(300);
            showPage('welcome'); 
            renderMenu(); 
            renderTrending();
        });
    });
};
window.showRegisterUI = () => {
    $('.brand-name').text('Join PurpleSip');
    $('#auth-subtitle').text('CREATE YOUR ACCOUNT');
    $('#auth-fields').hide().html(`
        <div class="login-field">
            <i class="fas fa-user"></i>
            <input type="text" id="reg-user" placeholder="FULL NAME">
        </div>
        <div class="login-field">
            <i class="fas fa-envelope"></i>
            <input type="email" id="reg-email" placeholder="EMAIL ADDRESS">
        </div>
        <div class="login-field">
            <i class="fas fa-lock"></i>
            <input type="password" id="reg-pass" placeholder="PASSWORD">
        </div>
    `).fadeIn(300);
    $('#forgot-link').hide();
    $('#auth-btn').text('CREATE ACCOUNT').attr('onclick', 'registerViaButton()');
    $('#toggle-text').html(`Already have an account? <a href="#" onclick="backToLoginUI()" style="color: #ff9e00; text-decoration: none; font-weight: 600;">Login</a>`);
};

window.backToLoginUI = () => {
    $('.brand-name').text('PurpleSip');
    $('#auth-subtitle').text('ENTERPRISE POS v10.0');
    $('#auth-fields').hide().html(`
        <div class="login-field">
            <i class="fas fa-user"></i>
            <input type="text" id="username" placeholder="USERNAME" autocomplete="off">
        </div>
        <div class="login-field">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" placeholder="PASSWORD">
        </div>
    `).fadeIn(300);
    $('#forgot-link').show();
    $('#auth-btn').text('LOGIN').attr('onclick', 'login()');
    $('#toggle-text').html(`Don't have an account? <a href="#" onclick="showRegisterUI()">Register</a>`);
};

window.registerViaButton = () => {
    const u = $('#reg-user').val();
    const e = $('#reg-email').val();
    const p = $('#reg-pass').val();

    if (!u || !e || !p) {
        pos.alertError('Please complete all fields');
        return;
    }

    if (!e.includes('@')) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Your email address must contain the "@" symbol.',
            background: '#1a1a1a',
            color: '#fff',
            confirmButtonColor: '#9d4edd'
        });
        return;
    }

    Swal.fire({
        title: 'Creating Account...',
        text: `Welcome, ${u}!`,
        timer: 1500,
        showConfirmButton: false,
        background: '#1a1a1a',
        color: '#fff'
    }).then(() => {
        $('#loginSection').fadeOut(300, function() {
            $('#mainApp').css('display', 'flex').hide().fadeIn(300);
            showPage('welcome'); 
            renderMenu(); 
            renderTrending();
            $('.hero-title').html(`Welcome, <br><span class="text-gradient">${u}!</span>`);
        });
    });
};

window.handleForgotPassword = () => {
    Swal.fire({
        title: 'Reset Password',
        text: 'Enter your email to receive a reset link:',
        input: 'email',
        inputPlaceholder: 'email@example.com',
        showCancelButton: true,
        confirmButtonText: 'Send Link',
        confirmButtonColor: '#9d4edd',
        background: '#1a1a1a',
        color: '#fff',
        inputValidator: (value) => {
            if (!value || !value.includes('@')) {
                return 'Please enter a valid email address!';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'Sent!',
                text: 'Reset link sent to ' + result.value,
                background: '#1a1a1a',
                color: '#fff'
            });
        }
    });
};

window.logout = () => {
    Swal.fire({
        title: 'Logout?',
        text: "You will need to login again.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#9d4edd',
        cancelButtonColor: '#3c096c',
        background: '#1a1a1a',
        color: '#fff'
    }).then((result) => {
        if (result.isConfirmed) location.reload();
    });
};

window.renderMenu = () => {
    const $container = $('#menuContainer').empty();
    Object.keys(menuData).forEach(category => {
        let html = `<h2 class="category-title" style="margin: 40px 0 20px; color: #ff9e00; font-weight: 800; border-left: 5px solid #9d4edd; padding-left: 15px;">${category}</h2><div class="menu-grid">`;
        menuData[category].filter(i => !i.trending).forEach(item => {
            html += `
            <div class="glass-card menu-card animate__animated animate__fadeIn">
            <div class="card-body">
            <h4>${item.name}</h4>
            <p class="price-tag">₱${item.price}</p>
            <button class="btn-glow" onclick="handleOrder('${item.name}', ${item.price}, '${category}')">ORDER NOW</button>
            </div>
            </div>`;
        });
        $container.append(html + `</div>`);
    });
};

window.renderTrending = () => {
    const $container = $('#bestSellersContainer').empty();
    Object.keys(menuData).forEach(category => {
        const trendingItems = menuData[category].filter(i => i.trending);
        if(trendingItems.length > 0) {
            let html = `<h2 class="trending-header" style="color:#ff9e00; margin-top:30px;">★ ${category} FAVORITES</h2><div class="menu-grid">`;
            trendingItems.forEach(item => {
                html += `
                <div class="glass-card menu-card trending-border">
                <div class="badge">TRENDING</div>
                <h4>${item.name}</h4>
                <p>₱${item.price}</p>
                <button class="btn-glow" onclick="handleOrder('${item.name}', ${item.price}, '${category}')">ORDER</button>
                </div>`;
            });
            $container.append(html + `</div>`);
        }
    });
};

window.handleOrder = (name, price, cat) => {
    pos.tempItem = { name, price, category: cat };
    if (!cat.includes("SNACKS")) {
        $('#sizeTargetName').text(name);
        selectSize('Small', 0, 'btnSmall'); 
        $('#sizeModal').css('display', 'flex'); 
    } else { 
        pos.addItem(name, price, "Standard", cat); 
    }
};

window.selectSize = (size, extra, id) => {
    pos.currentSize = size; 
    pos.extraPrice = extra;
    $('.size-btn').removeClass('active');
    $(`#${id}`).addClass('active');
};

window.confirmAdd = () => {
    pos.addItem(pos.tempItem.name, pos.tempItem.price + pos.extraPrice, pos.currentSize, pos.tempItem.category);
    closeModal('sizeModal');
};

window.showPage = (id) => {
    $('.page').hide();
    id === 'welcome' ? $(`#${id}`).css('display', 'flex') : $(`#${id}`).show();
    window.scrollTo(0,0);
};

window.searchMenu = () => {
    const q = $('#searchInputPOS').val().toLowerCase(); 
    $('.menu-card').each(function() {
        const text = $(this).text().toLowerCase();
        $(this).toggle(text.includes(q));
    });
};

window.openCart = () => $('#cartModal').css('display', 'flex'); 
window.closeModal = (id) => $(`#${id}`).hide(5); 

window.checkout = () => {
    if (pos.cart.length === 0) {
        pos.alertError("Your cart is empty!");
        return;
    }
    const transId = Math.floor(100000 + Math.random() * 900000);
    $('#receiptTransactionId').text(transId);
    $('#receiptTotal').text(`₱${pos.calculateTotal()}`);
    let html = "";
    const catsInCart = [...new Set(pos.cart.map(i => i.category))];
    catsInCart.forEach(c => {
        html += `<div style="font-weight:bold; margin-top:15px; border-bottom:1px solid #eee; color:#333;">${c}</div>`;
        pos.cart.filter(i => i.category === c).forEach(item => {
            html += `<div style="display:flex; justify-content:space-between; font-size:14px; margin-top:5px;">
            <span>${item.name} (${item.size})</span>
            <span>₱${item.price}</span>
            </div>`;
        });
    });
    $('#receiptItems').html(html);
    closeModal('cartModal'); 
    $('#receiptModal').css('display', 'flex').hide().fadeIn(300);
};

window.closeReceipt = () => { 
    $('#receiptModal').fadeOut(300, function() {
        pos.clearCart(); 
        showPage('welcome');
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: '#240046',
            color: '#fff'
        });
        Toast.fire({ icon: 'success', title: 'Order processed successfully!' });
    });
};

$(document).ready(function() {
    let studentDB = JSON.parse(localStorage.getItem('softnet_data')) || [];
    renderRecords();

    $('#nav-archive').on('click', function() {
        $('.nav-item').removeClass('active'); 
        $(this).addClass('active');
        $('#registry-form').hide();
        $('#page-title').text('Record Archive');
        $('#page-desc').text('All registered records are displayed below.');
    });

    $('#nav-registry').on('click', function() {
        $('.nav-item').removeClass('active'); 
        $(this).addClass('active');
        $('#registry-form').show();
        $('#page-title').text('Student Registration Portal');
        $('#page-desc').text('Official enrollment database for Softnet IT Center.');
    });

    $('#addBtn').on('click', function() {
        let isValid = true;
        $('.req').each(function() {
            if ($(this).val().trim() === "") { $(this).addClass('error-border'); isValid = false; }
            else { $(this).removeClass('error-border'); }
        });

        if (!isValid) {
            Swal.fire({ icon: 'error', title: 'Invalid', text: 'Please fill in required fields.', confirmButtonColor: '#4a148c' });
            return;
        }

        const now = new Date();
        const timeStr = now.toLocaleDateString() + ' | ' + now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        const newStudent = {
            id: Date.now(),
            last: $('#lastName').val().trim().toUpperCase(),
            first: $('#firstName').val().trim(),
            mid: $('#middleName').val().trim(),
            sfx: $('#suffix').val().trim(),
            sec: $('#section').val().trim().toUpperCase(),
            time: timeStr
        };

        let mInit = newStudent.mid ? ` ${newStudent.mid.toUpperCase().charAt(0)}.` : "";
        let fullName = `${newStudent.last}, ${newStudent.first}${mInit} ${newStudent.sfx}`.trim();

        studentDB.push({ ...newStudent, fullName: fullName });
        saveAndRender();

        Swal.fire({ icon: 'success', title: 'Registered', text: 'Student added to database.', timer: 1500, showConfirmButton: false });
        $('input').val('').removeClass('error-border');
        $('#lastName').focus();
    });

    $(document).on('click', '.delete-btn', function() {
        const id = $(this).data('id');
        Swal.fire({
            title: 'Delete Record?',
            text: "This action cannot be undone.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4a148c',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it'
        }).then((result) => {
            if (result.isConfirmed) {
                studentDB = studentDB.filter(s => s.id !== id);
                saveAndRender();
            }
        });
    });

    $('#searchInput').on('keyup', function() {
        const val = $(this).val().toLowerCase();
        $("#attendanceList li").each(function() {
            $(this).toggle($(this).text().toLowerCase().includes(val));
        });
    });

    function saveAndRender() {
        localStorage.setItem('softnet_data', JSON.stringify(studentDB));
        renderRecords();
    }

    function renderRecords() {
        $('#attendanceList').empty();
        [...studentDB].reverse().forEach(s => {
            const html = `
            <li>
            <div class="name-box">
            <strong>${s.fullName}</strong>
            <span class="timestamp" style="font-size:0.7rem; color:#888;"><i class="far fa-clock"></i> ${s.time}</span>
            </div>
            <div class="right-info" style="display:flex; align-items:center; gap:10px;">
            <span class="sec-badge">${s.sec}</span>
            <button class="delete-btn" data-id="${s.id}" style="background:none; border:none; cursor:pointer;"><i class="fas fa-trash-alt"></i></button>
            </div>
            </li>
            `;
            $('#attendanceList').append(html);
        });
        $('#count').text(studentDB.length);
    }

    $('#clearBtn').on('click', function() { $('input').val('').removeClass('error-border'); });
});

window.handleContact = (event) => {
    event.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for reaching out to PurpleSip. We will get back to you soon!',
        background: '#1a1a1a',
        color: '#fff',
        confirmButtonColor: '#9d4edd'
    });
    event.target.reset();
};
