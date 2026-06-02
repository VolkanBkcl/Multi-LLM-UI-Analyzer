# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 14:30:58
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Design a split-screen layout for a restaurant ordering system. The left pane should feature a categorized grid of menu items. The right pane must be a live order ticket/cart showing selected items, tax calculations, total amount, and a 'Send to Kitchen' action button. Use clean HTML and Tailwind CSS. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 76 | 88 | 75 | 86 | 46 | 83 |
| Qwen3.6 Plus | 77 | 84 | 80 | 87 | 49 | 83 |
| Gemini 3.5 Flash | 81 | 89 | 78 | 88 | 54 | 98 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 14:30:58
- **Üretim Süresi:** 198166 ms
- **Genel Skor:** 76/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

## Kullanıcı Promptu

Design a split-screen layout for a restaurant ordering system. The left pane should feature a categorized grid of menu items. The right pane must be a live order ticket/cart showing selected items, tax calculations, total amount, and a 'Send to Kitchen' action button. Use clean HTML and Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant Ordering System</title>
    <script src="https://cdn.tailwindcss.com">
    </script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#fef7ee',
                            100: '#fdedd3',
                            200: '#f9d7a5',
                            300: '#f5ba6d',
                            400: '#f09433',
                            500: '#ec7a11',
                            600: '#dd6007',
                            700: '#b74909',
                            800: '#923a0f',
                            900: '#773110',
                            950: '#401705',
                        },
                        accent: {
                            50: '#f0f9f0',
                            100: '#dbf0db',
                            200: '#b8e2b9',
                            300: '#86cd88',
                            400: '#53b157',
                            500: '#329536',
                            600: '#237927',
                            700: '#1d5f21',
                            800: '#1a4c1d',
                            900: '#163f19',
                            950: '#0a220c',
                        },
                    },
                },
            },
        }
    </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body class="bg-stone-100 font-sans antialiased h-screen overflow-hidden">

    <header class="bg-white shadow-sm border-b border-stone-200 px-6 py-3 flex items-center justify-between flex-shrink-0 z-10">
        <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center shadow-md">
                <i class="fa-solid fa-utensils text-white text-lg"></i>
            </div>
            <div>
                <h1 class="text-xl font-bold text-stone-800 tracking-tight">The Golden Spoon</h1>
                <p class="text-xs text-stone-500 -mt-0.5">Fine Dining & Takeout</p>
            </div>
        </div>
        <div class="flex items-center gap-4">
            <span class="text-sm text-stone-500 hidden sm:block">
                <i class="fa-regular fa-clock mr-1 text-brand-500"></i> Open until 10:00 PM
            </span>
            <div class="w-px h-6 bg-stone-200 hidden sm:block"></div>
            <span class="text-sm font-semibold text-stone-700">
                <i class="fa-solid fa-table mr-1 text-brand-500"></i> Table #7
            </span>
        </div>
    </header>

    <main class="flex h-[calc(100vh-57px)]">
        <!-- Left Pane - Menu -->
        <section class="w-3/5 lg:w-2/3 bg-stone-50 overflow-y-auto flex flex-col" id="menu-pane">
            <!-- Category Tabs -->
            <div class="sticky top-0 z-20 bg-stone-50/95 backdrop-blur-sm px-6 pt-4 pb-2 border-b border-stone-200/80">
                <div class="flex gap-2 overflow-x-auto pb-1 scrollbar-hide" id="category-tabs">
                    <button class="category-tab active whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 bg-brand-500 text-white shadow-md shadow-brand-500/25" data-category="all">
                        <i class="fa-solid fa-grid-2 mr-1.5 text-xs"></i> All Items
                    </button>
                    <button class="category-tab whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 bg-white text-stone-600 hover:bg-stone-100 border border-stone-200 hover:border-stone-300 shadow-sm" data-category="appetizers">
                        <i class="fa-solid fa-leaf mr-1.5 text-xs text-brand-400"></i> Appetizers
                    </button>
                    <button class="category-tab whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 bg-white text-stone-600 hover:bg-stone-100 border border-stone-200 hover:border-stone-300 shadow-sm" data-category="mains">
                        <i class="fa-solid fa-drumstick-bite mr-1.5 text-xs text-brand-400"></i> Main Courses
                    </button>
                    <button class="category-tab whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 bg-white text-stone-600 hover:bg-stone-100 border border-stone-200 hover:border-stone-300 shadow-sm" data-category="desserts">
                        <i class="fa-solid fa-cake-candles mr-1.5 text-xs text-brand-400"></i> Desserts
                    </button>
                    <button class="category-tab whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 bg-white text-stone-600 hover:bg-stone-100 border border-stone-200 hover:border-stone-300 shadow-sm" data-category="drinks">
                        <i class="fa-solid fa-martini-glass mr-1.5 text-xs text-brand-400"></i> Drinks
                    </button>
                </div>
            </div>

            <!-- Menu Grid -->
            <div class="px-6 py-5 grid grid-cols-2 xl:grid-cols-3 gap-4" id="menu-grid">
                <!-- Items populated by JS -->
            </div>
        </section>

        <!-- Right Pane - Order Cart -->
        <aside class="w-2/5 lg:w-1/3 bg-white border-l border-stone-200 flex flex-col shadow-xl z-10" id="cart-pane">
            <!-- Cart Header -->
            <div class="px-5 py-4 border-b border-stone-100 flex items-center justify-between flex-shrink-0">
                <div class="flex items-center gap-2.5">
                    <div class="relative">
                        <i class="fa-solid fa-receipt text-stone-700 text-xl"></i>
                        <span id="cart-count-badge" class="absolute -top-2 -right-2 bg-brand-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md shadow-brand-500/30 transition-all duration-300 scale-0">
                            0
                        </span>
                    </div>
                    <h2 class="text-lg font-bold text-stone-800">Order Ticket</h2>
                </div>
                <button id="clear-cart-btn" class="text-xs text-stone-400 hover:text-red-500 transition-colors duration-200 font-medium opacity-0 pointer-events-none">
                    <i class="fa-solid fa-trash-can mr-1"></i> Clear
                </button>
            </div>

            <!-- Cart Items -->
            <div class="flex-1 overflow-y-auto px-4 py-3" id="cart-items-container">
                <div id="empty-cart-state" class="flex flex-col items-center justify-center h-full text-center px-6">
                    <div class="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mb-4">
                        <i class="fa-solid fa-basket-shopping text-stone-300 text-3xl"></i>
                    </div>
                    <p class="text-stone-400 font-medium text-sm">Your cart is empty</p>
                    <p class="text-stone-300 text-xs mt-1">Tap items from the menu to start building your order</p>
                </div>
                <ul class="space-y-2" id="cart-items-list"></ul>
            </div>

            <!-- Cart Summary -->
            <div class="border-t border-stone-200 px-5 py-4 flex-shrink-0 bg-stone-50/80">
                <div class="space-y-2 text-sm">
                    <div class="flex justify-between text-stone-600">
                        <span>Subtotal</span>
                        <span class="font-semibold" id="cart-subtotal">$0.00</span>
                    </div>
                    <div class="flex justify-between text-stone-600">
                        <span>Tax <span class="text-xs text-stone-400">(8%)</span></span>
                        <span class="font-semibold" id="cart-tax">$0.00</span>
                    </div>
                    <div class="flex justify-between text-stone-600 border-t border-dashed border-stone-300 pt-2">
                        <span class="text-sm">Service Fee</span>
                        <span class="font-semibold" id="cart-service-fee">$0.00</span>
                    </div>
                    <div class="flex justify-between text-lg font-bold text-stone-800 border-t border-stone-300 pt-2">
                        <span>Total</span>
                        <span id="cart-total">$0.00</span>
                    </div>
                </div>
                <button id="send-to-kitchen-btn"
                class="mt-4 w-full py-3.5 rounded-2xl font-bold text-white text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-2 bg-stone-300 cursor-not-allowed shadow-none"
                disabled>
                <i class="fa-solid fa-paper-plane"></i> Send to Kitchen
            </button>
            <p id="kitchen-feedback" class="text-center text-xs text-accent-600 font-semibold mt-2 opacity-0 transition-opacity duration-300 h-4">
                <i class="fa-solid fa-circle-check mr-1"></i> Order sent successfully!
            </p>
        </div>
    </aside>
</main>

<!-- Toast Notification -->
<div id="toast" class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-stone-800 text-white px-5 py-3 rounded-full text-sm font-semibold shadow-2xl opacity-0 pointer-events-none transition-all duration-300 translate-y-4 z-50 flex items-center gap-2">
    <i class="fa-solid fa-circle-check text-accent-400"></i>
    <span id="toast-message">Item added</span>
</div>

<script>
    const menuItems = [
        { id: 1, name: 'Crispy Calamari', category: 'appetizers', price: 12.99, emoji: '🦑',
            desc: 'Golden fried with lemon aioli' },
        { id: 2, name: 'Bruschetta Trio', category: 'appetizers', price: 10.49, emoji: '🍞',
            desc: 'Tomato, basil & balsamic glaze' },
        { id: 3, name: 'Caesar Salad', category: 'appetizers', price: 9.99, emoji: '🥗',
            desc: 'Romaine, parmesan, croutons' },
        { id: 4, name: 'Soup du Jour', category: 'appetizers', price: 8.49, emoji: '🍲',
        desc: 'Chef\'s daily creation' },
        { id: 5, name: 'Grilled Ribeye', category: 'mains', price: 34.99, emoji: '🥩',
            desc: '12oz with herb butter' },
        { id: 6, name: 'Pan-Seared Salmon', category: 'mains', price: 28.99, emoji: '🐟',
            desc: 'Lemon dill sauce, asparagus' },
        { id: 7, name: 'Truffle Pasta', category: 'mains', price: 22.99, emoji: '🍝',
            desc: 'Black truffle, parmesan cream' },
        { id: 8, name: 'Herb Chicken', category: 'mains', price: 19.99, emoji: '🍗',
            desc: 'Roasted with root vegetables' },
        { id: 9, name: 'Wagyu Burger', category: 'mains', price: 18.99, emoji: '🍔',
            desc: 'Caramelized onions, aged cheddar' },
        { id: 10, name: 'Tiramisu', category: 'desserts', price: 11.49, emoji: '🍰',
        desc: 'Espresso-soaked ladyfingers' },
        { id: 11, name: 'Crème Brûlée', category: 'desserts', price: 9.99, emoji: '🍮',
            desc: 'Vanilla bean, caramelized sugar' },
        { id: 12, name: 'Chocolate Lava Cake', category: 'desserts', price: 12.49, emoji: '🧁',
            desc: 'Molten center, vanilla ice cream' },
        { id: 13, name: 'Craft Lemonade', category: 'drinks', price: 5.99, emoji: '🍋',
        desc: 'Fresh squeezed, hint of mint' },
        { id: 14, name: 'Espresso Martini', category: 'drinks', price: 14.99, emoji: '🍸',
            desc: 'Vodka, coffee liqueur, espresso' },
        { id: 15, name: 'Red Wine Glass', category: 'drinks', price: 13.49, emoji: '🍷',
        desc: 'Sommelier selection' },
        { id: 16, name: 'Sparkling Water', category: 'drinks', price: 3.99, emoji: '🫧',
        desc: 'Chilled, lemon wedge' },
    ];

    let cart = [];
    let activeCategory = 'all';

    const menuGrid = document.getElementById('menu-grid');
    const cartItemsList = document.getElementById('cart-items-list');
    const emptyCartState = document.getElementById('empty-cart-state');
    const cartCountBadge = document.getElementById('cart-count-badge');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const sendToKitchenBtn = document.getElementById('send-to-kitchen-btn');
    const kitchenFeedback = document.getElementById('kitchen-feedback');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTax = document.getElementById('cart-tax');
    const cartServiceFee = document.getElementById('cart-service-fee');
    const cartTotal = document.getElementById('cart-total');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    const categoryTabs = document.querySelectorAll('.category-tab');

    const TAX_RATE = 0.08;
    const SERVICE_FEE_RATE = 0.03;

    function renderMenuItems(category) {
        const filtered = category === 'all' ? menuItems : menuItems.filter(item => item.category ===
            category);
        menuGrid.innerHTML = filtered.map(item => `
                    <div class="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg border border-stone-200/80 hover:border-brand-200 transition-all duration-300 group cursor-pointer flex flex-col gap-3 hover:-translate-y-0.5"
                         onclick="addToCart(${item.id}, '${item.name.replace(/'/g, "\\'")}', ${item.price})">
                        <div class="w-full h-28 bg-gradient-to-br from-brand-100 to-amber-50 rounded-xl flex items-center justify-center text-5xl relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                            <span class="relative z-10 drop-shadow-sm">${item.emoji}</span>
                            <div class="absolute inset-0 bg-gradient-to-t from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div class="flex-1">
                            <h3 class="font-bold text-stone-800 text-sm leading-tight">${item.name}</h3>
                            <p class="text-xs text-stone-400 mt-0.5">${item.desc}</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-brand-600 font-bold text-lg">$${item.price.toFixed(2)}</span>
                            <button class="w-9 h-9 rounded-full bg-brand-500 text-white flex items-center justify-center hover:bg-brand-600 transition-all duration-200 shadow-md shadow-brand-500/25 hover:shadow-lg hover:shadow-brand-500/35 active:scale-90 text-sm"
                                    onclick="event.stopPropagation(); addToCart(${item.id}, '${item.name.replace(/'/g, "\\'")}', ${item.price})">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </div>
                `).join('');
    }

    function addToCart(id, name, price) {
        const existing = cart.find(item => item.id === id);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }
        updateCart();
        showToast(`${name} added to order`);
        // Brief pulse animation on the cart badge
        cartCountBadge.classList.add('animate-pulse');
        setTimeout(() => cartCountBadge.classList.remove('animate-pulse'), 400);
    }

    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        updateCart();
    }

    function updateQuantity(id, delta) {
        const item = cart.find(item => item.id === id);
        if (!item) return;
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(id);
            return;
        }
        updateCart();
    }

    function clearCart() {
        cart = [];
        updateCart();
        showToast('Cart cleared');
    }

    function updateCart() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const tax = subtotal * TAX_RATE;
        const serviceFee = subtotal * SERVICE_FEE_RATE;
        const total = subtotal + tax + serviceFee;

        // Update badge
        if (totalItems > 0) {
            cartCountBadge.textContent = totalItems;
            cartCountBadge.classList.remove('scale-0');
            cartCountBadge.classList.add('scale-100');
            clearCartBtn.classList.remove('opacity-0', 'pointer-events-none');
            clearCartBtn.classList.add('opacity-100');
            emptyCartState.classList.add('hidden');
            cartItemsList.classList.remove('hidden');
        } else {
            cartCountBadge.classList.add('scale-0');
            cartCountBadge.classList.remove('scale-100');
            clearCartBtn.classList.add('opacity-0', 'pointer-events-none');
            clearCartBtn.classList.remove('opacity-100');
            emptyCartState.classList.remove('hidden');
            cartItemsList.classList.add('hidden');
        }

        // Render cart items
        cartItemsList.innerHTML = cart.map(item => `
                    <li class="flex items-center gap-3 bg-stone-50 rounded-xl p-3 border border-stone-100 hover:border-stone-200 transition-all duration-200 group">
                        <div class="flex-1 min-w-0">
                            <p class="font-semibold text-stone-800 text-sm truncate">${item.name}</p>
                            <p class="text-xs text-stone-400">$${item.price.toFixed(2)} each</p>
                        </div>
                        <div class="flex items-center gap-1.5 bg-white rounded-full border border-stone-200 px-1 py-0.5 shadow-sm">
                            <button class="w-7 h-7 rounded-full flex items-center justify-center text-stone-500 hover:bg-red-50 hover:text-red-500 transition-all duration-150 text-xs font-bold"
                                    onclick="updateQuantity(${item.id}, -1)">
                                <i class="fa-solid fa-minus text-[10px]"></i>
                            </button>
                            <span class="w-7 text-center font-bold text-stone-700 text-sm select-none">${item.quantity}</span>
                            <button class="w-7 h-7 rounded-full flex items-center justify-center text-stone-500 hover:bg-accent-50 hover:text-accent-600 transition-all duration-150 text-xs font-bold"
                                    onclick="updateQuantity(${item.id}, 1)">
                                <i class="fa-solid fa-plus text-[10px]"></i>
                            </button>
                        </div>
                        <span class="font-bold text-stone-800 text-sm w-16 text-right">$${(item.price * item.quantity).toFixed(2)}</span>
                        <button class="w-7 h-7 rounded-full flex items-center justify-center text-stone-300 hover:text-red-500 hover:bg-red-50 transition-all duration-150 opacity-0 group-hover:opacity-100 flex-shrink-0"
                                onclick="removeFromCart(${item.id})">
                            <i class="fa-solid fa-xmark text-xs"></i>
                        </button>
                    </li>
                `).join('');

        // Update summary
        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        cartTax.textContent = `$${tax.toFixed(2)}`;
        cartServiceFee.textContent = `$${serviceFee.toFixed(2)}`;
        cartTotal.textContent = `$${total.toFixed(2)}`;

        // Update send button
        if (totalItems > 0) {
            sendToKitchenBtn.disabled = false;
            sendToKitchenBtn.classList.remove('bg-stone-300', 'cursor-not-allowed', 'shadow-none');
            sendToKitchenBtn.classList.add('bg-accent-500', 'hover:bg-accent-600', 'cursor-pointer',
                'shadow-lg', 'shadow-accent-500/30', 'hover:shadow-xl', 'hover:shadow-accent-500/40');
        } else {
            sendToKitchenBtn.disabled = true;
            sendToKitchenBtn.classList.add('bg-stone-300', 'cursor-not-allowed', 'shadow-none');
            sendToKitchenBtn.classList.remove('bg-accent-500', 'hover:bg-accent-600', 'cursor-pointer',
                'shadow-lg', 'shadow-accent-500/30', 'hover:shadow-xl', 'hover:shadow-accent-500/40');
        }
    }

    function sendToKitchen() {
        if (cart.length === 0) return;
        // Simulate sending
        sendToKitchenBtn.disabled = true;
        const originalHTML = sendToKitchenBtn.innerHTML;
        sendToKitchenBtn.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
        sendToKitchenBtn.classList.add('opacity-80');

        setTimeout(() => {
            kitchenFeedback.classList.remove('opacity-0');
            kitchenFeedback.classList.add('opacity-100');
            sendToKitchenBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Sent!';
            sendToKitchenBtn.classList.remove('bg-accent-500', 'hover:bg-accent-600', 'shadow-lg',
                'shadow-accent-500/30');
            sendToKitchenBtn.classList.add('bg-accent-700', 'shadow-md');

            setTimeout(() => {
                cart = [];
                updateCart();
                kitchenFeedback.classList.add('opacity-0');
                kitchenFeedback.classList.remove('opacity-100');
                sendToKitchenBtn.innerHTML = originalHTML;
                sendToKitchenBtn.disabled = true;
                sendToKitchenBtn.classList.add('bg-stone-300', 'cursor-not-allowed', 'shadow-none');
                sendToKitchenBtn.classList.remove('bg-accent-700', 'bg-accent-500',
                    'hover:bg-accent-600', 'shadow-md', 'shadow-lg', 'shadow-accent-500/30',
                    'opacity-80');
                showToast('Order sent to kitchen! 🎉');
            }, 1800);
        }, 900);
    }

    function showToast(message) {
        toastMessage.textContent = message;
        toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
        toast.classList.add('opacity-100', 'translate-y-0');
        clearTimeout(toast._timeout);
        toast._timeout = setTimeout(() => {
            toast.classList.add('opacity-0', 'translate-y-4');
            toast.classList.remove('opacity-100', 'translate-y-0');
        }, 2200);
    }

    // Category tab switching
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => {
                t.classList.remove('active', 'bg-brand-500', 'text-white', 'shadow-md',
                    'shadow-brand-500/25', 'border-brand-200');
                t.classList.add('bg-white', 'text-stone-600', 'border', 'border-stone-200',
                    'shadow-sm');
                const icon = t.querySelector('i');
                if (icon) icon.classList.add('text-brand-400');
            });
            tab.classList.add('active', 'bg-brand-500', 'text-white', 'shadow-md',
                'shadow-brand-500/25');
            tab.classList.remove('bg-white', 'text-stone-600', 'border', 'border-stone-200',
                'shadow-sm');
            const icon = tab.querySelector('i');
            if (icon) icon.classList.remove('text-brand-400');
            activeCategory = tab.dataset.category;
            renderMenuItems(activeCategory);
        });
    });

    clearCartBtn.addEventListener('click', clearCart);
    sendToKitchenBtn.addEventListener('click', sendToKitchen);

    // Initial render
    renderMenuItems('all');
    updateCart();
</script>

<style>
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
    .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    #cart-items-container::-webkit-scrollbar {
        width: 4px;
    }
    #cart-items-container::-webkit-scrollbar-track {
        background: transparent;
    }
    #cart-items-container::-webkit-scrollbar-thumb {
        background: #d6d3d1;
        border-radius: 20px;
    }
    #menu-pane::-webkit-scrollbar {
        width: 5px;
    }
    #menu-pane::-webkit-scrollbar-track {
        background: transparent;
    }
    #menu-pane::-webkit-scrollbar-thumb {
        background: #d6d3d1;
        border-radius: 20px;
    }
    @keyframes pulse-badge {
        0%,
        100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.35);
        }
    }
    .animate-pulse {
        animation: pulse-badge 0.4s ease-in-out;
    }
</style>
</body>
</html>
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 93 | 82 | — | **88** | Ortalama (J1-J2) |
| Performans | 78 | 72 | — | **75** | Ortalama (J1-J2) |
| Güvenlik | 90 | 82 | — | **86** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 40 | 52 | — | **46** | Ortalama (J1-J2) |
| Prompt Uyumu | 83 | 83 | — | **83** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 88/100

**Öneriler:**
- `updateCart` gibi çok işlevli fonksiyonları daha küçük yardımcı fonksiyonlara bölün (ör. `renderCartItems`, `updateSummary`, `updateButtonState`).
- Şablon dizgileri içinde `onclick` yerine JavaScript'te `addEventListener` kullanarak HTML/JS karışımını azaltın.
- Inline onclick'larda addToCart(item.id, item.name, item.price) yerine tek bir addToCart(item) çağrısı kullanıp escaping/quoting karmaşıklığını ortadan kaldırın; veriyi data-* özniteliklerinden okuyun.
- Kategori sekmelerinin aktif/pasif state yönetimini CSS'te bir .active sınıfına bağlayıp classList.remove/add zincirlerini kısaltın; vergi oranı etiketini de TAX_RATE sabitinden dinamik olarak üretin.

### Performans — 75/100

**Öneriler:**
- Kategori filtreleme sonrası menü listesini innerHTML yerine DocumentFragment veya template cloning ile güncelleyerek mevcut DOM node'larını yeniden oluşturma maliyetini azaltabilirsiniz.
- Sık tekrarlanan addToCart çağrıları (ör. hızlı tıklama) için debounce veya en azından requestAnimationFrame içinde toplu update yaparak ara DOM yazımlarını sınırlayabilirsiniz.
- Üretim için Tailwind CDN'i (runtime JIT) kaldırıp build-time derlenmiş CSS kullanın; bu, ilk yükleme süresini ve JS çalışma maliyetini ciddi ölçüde azaltır.
- setTimeout ID'lerini bir değişkende saklayıp, yeni çağrı/animasyon öncesinde clearTimeout ile temizleyin; böylece üst üste binen toast ve gönderim geri bildirimlerinin yarattığı gereksiz render ve bellek baskısı önlenir.

### Güvenlik — 86/100

**Öneriler:**
- If future integration adds dynamic or user-provided data (e.g., menu items from an API), always sanitize content before injecting into the DOM; consider using textContent or a library like DOMPurify instead of basic string escaping.
- Avoid embedding escape logic in template literals for attribute values; prefer data binding or safer interpolation methods to prevent potential XSS when handling untrusted input.
- Kart ve menü render'ında `innerHTML` yerine `textContent` ve `createElement` kullanarak XSS yüzeyini tamamen ortadan kaldırın.
- Inline `onclick` handler'ları ve string interpolation'ı kaldırıp `addEventListener` ile event delegation deseni uygulayın.

### Sürdürülebilirlik — 46/100

**Öneriler:**
- Kodu bileşenlere ayırarak modüler yapıya geçirin (ör. özel HTML elemanları veya JavaScript modülleri). İş mantığını DOM manipülasyonundan ayırmak için state yönetimi ve render fonksiyonları oluşturun.
- Sabitleri ayrı bir yapılandırma dosyasına çıkarın; olay işleyicilerini addEventListener ile bağlayarak HTML içi onclick kullanımını azaltın ve test edilebilirliği artırın.
- Kategori sekmelerini ve menü kartı markup'ını bir data dizisinden döngüyle üretin, böylece yeni kategori/öğe eklemek için sadece veri değiştirmek yetsin (DRY).
- Cart güncelleme mantığını küçük saf fonksiyonlara (calculateTotals, renderCartItems) ayırın ve global 'cart' durumunu bir state objesinde kapsayarak değiştirilebilirliği artırın; ayrıca string escaping yerine dataset.id ile event delegation kullanın.

### Prompt Uyumu — 83/100

- Programatik: 75/100 · Semantik: 95/100
- İhlaller: inline_css_not_detected

**Öneriler:**
- Sol paneldeki menü öğeleri için fiyatın yanında 'Sepete Ekle' butonu zaten var; ancak ürün kartına tıklayınca da ekleme yapılması kullanıcı deneyimini artırabilir (çift yönlü etkileşim tutarlılığı).
- Sağ paneldeki 'Service Fee' kalemi promptta açıkça istenmemiş olsa da zarif bir dokunuş; ancak sipariş fişinde yalnızca istenen alanların (vergi, toplam) gösterilmesi sadakat açısından daha güvenli olabilir.
- Send to Kitchen is a UI simulation only; a comment or a stub fetch call could clarify this is intentionally a demo without backend.
- The category tabs are rendered as static HTML but could be generated from the menu data to keep the category list DRY if items are added later.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 14:30:58
- **Üretim Süresi:** 135389 ms
- **Genel Skor:** 77/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

## Kullanıcı Promptu

Design a split-screen layout for a restaurant ordering system. The left pane should feature a categorized grid of menu items. The right pane must be a live order ticket/cart showing selected items, tax calculations, total amount, and a 'Send to Kitchen' action button. Use clean HTML and Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Restaurant Order System</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; }
    .custom-scroll::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scroll::-webkit-scrollbar-track { background: transparent; }
    .custom-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    .custom-scroll::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
    .fade-in { animation: fadeIn 0.2s ease-in-out; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
  </style>
</head>
<body class="bg-gray-50 h-screen flex overflow-hidden text-gray-800">

  <div class="w-2/3 flex flex-col border-r border-gray-200 bg-white">
    <div class="p-4 border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm">
      <nav class="flex space-x-2 overflow-x-auto pb-2 custom-scroll" id="category-nav"></nav>
    </div>
    <div class="flex-1 overflow-y-auto p-4 custom-scroll">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="menu-grid"></div>
    </div>
  </div>

  <div class="w-1/3 flex flex-col bg-gray-50">
    <div class="p-4 border-b border-gray-200 bg-white">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-semibold text-gray-900">Order Ticket</h2>
          <p class="text-sm text-gray-500">Table #12 • Dine-in</p>
        </div>
        <span class="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">Active</span>
      </div>
    </div>

    <div class="flex-1 overflow-y-auto p-4 custom-scroll" id="cart-items">
      <div class="flex flex-col items-center justify-center h-full text-gray-400">
        <svg class="w-12 h-12 mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        <p class="text-sm font-medium">Select items to begin</p>
      </div>
    </div>

    <div class="p-4 border-t border-gray-200 bg-white">
      <div class="space-y-2 mb-4 text-sm">
        <div class="flex justify-between text-gray-600"><span>Subtotal</span><span id="subtotal">$0.00</span></div>
        <div class="flex justify-between text-gray-600"><span>Tax (8.5%)</span><span id="tax">$0.00</span></div>
        <div class="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-100"><span>Total</span><span id="total">$0.00</span></div>
      </div>
      <button id="send-to-kitchen" class="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-semibold rounded-xl shadow-lg shadow-emerald-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none" disabled>
        Send to Kitchen
      </button>
    </div>
  </div>

  <script>
    const menuData = [
      { id: 1, category: 'appetizers', name: 'Truffle Fries', price: 8.50, desc: 'Parmesan, truffle oil, fresh herbs' },
      { id: 2, category: 'appetizers', name: 'Burrata Salad', price: 12.00, desc: 'Heirloom tomatoes, basil pesto, balsamic' },
      { id: 3, category: 'mains', name: 'Grilled Salmon', price: 24.50, desc: 'Lemon dill sauce, roasted asparagus' },
      { id: 4, category: 'mains', name: 'Wagyu Burger', price: 21.00, desc: 'Caramelized onions, aged cheddar, brioche' },
      { id: 5, category: 'mains', name: 'Mushroom Risotto', price: 18.00, desc: 'Wild mushrooms, parmesan, truffle butter' },
      { id: 6, category: 'drinks', name: 'Craft Lemonade', price: 5.50, desc: 'Fresh mint, sparkling water, honey' },
      { id: 7, category: 'drinks', name: 'Espresso Martini', price: 14.00, desc: 'Vodka, coffee liqueur, cold brew' },
      { id: 8, category: 'desserts', name: 'Tiramisu', price: 10.00, desc: 'Mascarpone, espresso, cocoa dust' },
      { id: 9, category: 'desserts', name: 'Lava Cake', price: 11.50, desc: 'Dark chocolate, vanilla bean ice cream' }
    ];

    const categories = ['all', 'appetizers', 'mains', 'drinks', 'desserts'];
    let cart = {};
    let activeCategory = 'all';

    const categoryNav = document.getElementById('category-nav');
    const menuGrid = document.getElementById('menu-grid');
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');
    const sendBtn = document.getElementById('send-to-kitchen');

    function renderCategories() {
      categoryNav.innerHTML = categories.map(cat => `
        <button onclick="setCategory('${cat}')" class="px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-gray-900 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}">
          ${cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      `).join('');
    }

    function renderMenu() {
      const filtered = activeCategory === 'all' ? menuData : menuData.filter(i => i.category === activeCategory);
      menuGrid.innerHTML = filtered.map(item => `
        <div class="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg hover:border-gray-300 transition-all flex flex-col fade-in">
          <div class="h-28 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 flex items-center justify-center text-3xl">🍽️</div>
          <h3 class="font-semibold text-gray-900">${item.name}</h3>
          <p class="text-xs text-gray-500 mt-1 mb-3 flex-1">${item.desc}</p>
          <div class="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
            <span class="font-bold text-emerald-700">$${item.price.toFixed(2)}</span>
            <button type="button" onclick="addToCart(${item.id})" class="px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 active:scale-95 transition-all">
              Add +
            </button>
          </div>
        </div>
      `).join('');
    }

    function addToCart(id) {
      if (cart[id]) cart[id].qty++;
      else cart[id] = { ...menuData.find(i => i.id === id), qty: 1 };
      renderCart();
    }

    function removeFromCart(id) {
      if (cart[id].qty > 1) cart[id].qty--;
      else delete cart[id];
      renderCart();
    }

    function renderCart() {
      const items = Object.values(cart);
      if (items.length === 0) {
        cartItemsContainer.innerHTML = `
          <div class="flex flex-col items-center justify-center h-full text-gray-400 fade-in">
            <svg class="w-12 h-12 mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            <p class="text-sm font-medium">Select items to begin</p>
          </div>`;
        sendBtn.disabled = true;
        updateTotals();
        return;
      }
      sendBtn.disabled = false;
      cartItemsContainer.innerHTML = `<div class="space-y-3 fade-in">` + items.map(item => `
        <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div class="flex-1 min-w-0">
            <h4 class="font-medium text-gray-900 text-sm truncate">${item.name}</h4>
            <p class="text-xs text-gray-500">$${item.price.toFixed(2)} each</p>
          </div>
          <div class="flex items-center space-x-2 ml-2">
            <button type="button" onclick="removeFromCart(${item.id})" class="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors">−</button>
            <span class="w-6 text-center font-semibold text-sm">${item.qty}</span>
            <button type="button" onclick="addToCart(${item.id})" class="w-7 h-7 flex items-center justify-center rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-700 transition-colors">+</button>
          </div>
          <span class="ml-3 font-semibold text-gray-900 text-sm w-16 text-right">$${(item.price * item.qty).toFixed(2)}</span>
        </div>
      `).join('') + `</div>`;
      updateTotals();
    }

    function updateTotals() {
      const items = Object.values(cart);
      const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
      const tax = subtotal * 0.085;
      const total = subtotal + tax;
      subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
      taxEl.textContent = `$${tax.toFixed(2)}`;
      totalEl.textContent = `$${total.toFixed(2)}`;
    }

    function setCategory(cat) {
      activeCategory = cat;
      renderCategories();
      renderMenu();
    }

    sendBtn.addEventListener('click', () => {
      if (Object.keys(cart).length === 0) return;
      const originalText = sendBtn.textContent;
      sendBtn.textContent = 'Sending...';
      sendBtn.disabled = true;
      sendBtn.classList.add('opacity-75', 'cursor-wait');
      
      setTimeout(() => {
        sendBtn.textContent = '✓ Sent Successfully';
        sendBtn.classList.remove('bg-emerald-600', 'hover:bg-emerald-700');
        sendBtn.classList.add('bg-green-600');
        
        setTimeout(() => {
          cart = {};
          renderCart();
          sendBtn.textContent = originalText;
          sendBtn.disabled = false;
          sendBtn.classList.remove('opacity-75', 'cursor-wait', 'bg-green-600');
          sendBtn.classList.add('bg-emerald-600', 'hover:bg-emerald-700');
        }, 1200);
      }, 800);
    });

    renderCategories();
    renderMenu();
    renderCart();
  </script>
</body>
</html>
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 87 | 80 | — | **84** | Ortalama (J1-J2) |
| Performans | 82 | 78 | — | **80** | Ortalama (J1-J2) |
| Güvenlik | 95 | 78 | — | **87** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 40 | 58 | — | **49** | Ortalama (J1-J2) |
| Prompt Uyumu | 82 | 83 | — | **83** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 84/100

**Öneriler:**
- `0.085` vergi oranını `TAX_RATE` gibi bir sabit olarak tanımlayın.
- 'Send to Kitchen' butonunun durum yönetimini ve `setTimeout` akışını kısaca açıklayan yorum ekleyin.
- Sabit değerleri (TAX_RATE, SEND_DELAY_MS) kodun başında `const` olarak tanımlayarak magic number'ları ortadan kaldırın.
- Boş sepet HTML'ini bir yardımcı fonksiyona (örn. `getEmptyCartHTML()`) çıkararak tekrarı önleyin ve `renderCart` içinde yeniden kullanın.

### Performans — 80/100

**Öneriler:**
- Inline `onclick` yerine olay delegasyonu (event delegation) kullanarak her render'da yeni fonksiyon oluşturmayı ve DOM manipülasyonunu azaltabilirsiniz.
- Fiyat hesaplaması ve toplam güncelleme `updateTotals` fonksiyonu tutarlı, ancak büyük sepetlerde gereksiz render'ı önlemek için toplam hesaplamasını `requestAnimationFrame` içinde yapmayı değerlendirebilirsiniz.
- Google Fonts yüklemesini @import yerine <link rel='preconnect'> + <link rel='stylesheet'> ile değiştirerek render-blocking etkisini azaltın.
- Sepet ekleme işleminde menuData.find() yerine id'ye göre O(1) erişim için bir Map yapısı kullanın; ayrıca menü grid'ini her kategori değişiminde tamamen yeniden çizmek yerine filtrelemeyi inline data-attribute ile uygulayın.

### Güvenlik — 87/100

**Öneriler:**
- 'Send to Kitchen' işlevinin gerçek bir API çağrısı yapması gerekiyorsa, HTTPS kullanıldığından ve backend'de input doğrulaması yapıldığından emin olun.
- Kullanıcı tarafından değiştirilebilecek menü verisi veya URL parametreleri eklenirse, XSS engelleme ve input doğrulama eklenmelidir.
- Eğer menü verileri ileride bir API'den gelecekse, innerHTML yerine DOM API veya document.createElement kullanarak veya DOMPurify ile sanitize ederek XSS riskini önleyin.
- Konsola hata ayıklama bilgisi yazdırırken hassas veri (sepet içeriği, müşteri bilgisi) sızmamasına dikkat edin; production build'de console.log çağrılarını kaldırın.

### Sürdürülebilirlik — 49/100

**Öneriler:**
- Menü öğeleri, sepet ve sipariş biletini ayrı JS modülleri/bileşenleri olarak yapılandırın.
- Vergi oranı, kategori listesi gibi sabitleri `constants.js` gibi ayrı bir dosyaya çıkarın; durum yönetimini daha bağımsız ve test edilebilir fonksiyonlar halinde soyutlayın.
- Vergi oranı, tablo numarası ve kategori listesi gibi sabit değerleri üstte bir CONFIG veya CONSTANTS nesnesine çıkararak tek noktadan değiştirilebilirlik sağlayın; ayrıca kategorileri menuData'dan otomatik türetin.
- addToCart/removeFromCart/setCategory gibi fonksiyonları onclick attribute'ları yerine event delegation (ör. menuGrid.addEventListener('click', ...)) ile bağlayıp, 'Send to Kitchen' için try/catch ve gerçek loading/error state yönetimi ekleyin.

### Prompt Uyumu — 83/100

- Programatik: 75/100 · Semantik: 92/100
- İhlaller: inline_css_not_detected

**Öneriler:**
- Menü öğeleri için gerçek görseller yerine emoji (🍽️) kullanılmış; promptta grafiksel bir kısıt belirtilmemiş olsa da üretime hazır (production-ready) kodu hedefleyen sistem talimatı açısından bu, yer tutucu sayılabilir.
- Sepet boşken sadece butonu devre dışı bırakmak yerine, butonu tamamen gizlemek veya daha etkin bir görsel ipucu eklemek, kullanıcı deneyimini (UI/UX) iyileştirebilir.
- Consider adding a small visual accent (e.g., emoji or placeholder gradient) per category to better differentiate items beyond the generic 🍽️ icon.
- Add an item image placeholder or colored category badge on each card to strengthen visual hierarchy and aid quick scanning.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 14:30:58
- **Üretim Süresi:** 34617 ms
- **Genel Skor:** 81/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

## Kullanıcı Promptu

Design a split-screen layout for a restaurant ordering system. The left pane should feature a categorized grid of menu items. The right pane must be a live order ticket/cart showing selected items, tax calculations, total amount, and a 'Send to Kitchen' action button. Use clean HTML and Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GourmetOS - Restaurant POS System</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Alpine.js for reactive state management -->
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
        }
        /* Custom scrollbar styling for seamless UI */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }
    </style>
</head>
<body class="bg-slate-900 text-slate-100 h-screen overflow-hidden select-none" 
      x-data="posSystem()" 
      x-init="init()">

    <!-- Main Container -->
    <div class="flex h-full w-full overflow-hidden">
        
        <!-- LEFT PANE: Menu & Categories (65% width) -->
        <main class="w-[65%] h-full flex flex-col bg-slate-950 border-r border-slate-800">
            <!-- Top Header & Search -->
            <header class="p-6 border-b border-slate-800 flex items-center justify-between gap-6 bg-slate-950/80 backdrop-blur-md sticky top-0 z-10">
                <div>
                    <h1 class="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">GOURMET OS</h1>
                    <p class="text-xs text-slate-400 mt-1 font-medium">Station: Main Bar • Server: Alex M.</p>
                </div>
                
                <!-- Search Input -->
                <div class="relative flex-1 max-w-md">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </span>
                    <input type="text" 
                           x-model="searchQuery"
                           placeholder="Search delicious food, drinks, desserts..." 
                           class="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-200">
                </div>
            </header>

            <!-- Category Navigation -->
            <div class="px-6 py-4 bg-slate-950/40 border-b border-slate-800/60 overflow-x-auto flex gap-2 scrollbar-none">
                <template x-for="category in categories" :key="category">
                    <button @click="activeCategory = category"
                            :class="activeCategory === category 
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold shadow-lg shadow-orange-500/20' 
                                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'"
                            class="px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap">
                        <span x-text="category"></span>
                    </button>
                </template>
            </div>

            <!-- Menu Grid (Scrollable) -->
            <div class="flex-1 overflow-y-auto p-6 bg-slate-950">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <template x-for="item in filteredItems()" :key="item.id">
                        <div @click="addToCart(item)" 
                             class="group relative bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden cursor-pointer hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col transform active:scale-[0.98]">
                            
                            <!-- Image Container -->
                            <div class="relative h-44 w-full overflow-hidden bg-slate-950">
                                <img :src="item.image" :alt="item.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                                
                                <!-- Category Badge -->
                                <span class="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase text-amber-400 border border-slate-800" x-text="item.category"></span>
                                
                                <!-- Price Badge -->
                                <span class="absolute bottom-3 right-3 text-lg font-extrabold text-amber-400" x-text="formatPrice(item.price)"></span>
                            </div>

                            <!-- Content -->
                            <div class="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 class="font-bold text-slate-100 group-hover:text-amber-400 transition-colors duration-200" x-text="item.name"></h3>
                                    <p class="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed" x-text="item.description"></p>
                                </div>
                                
                                <!-- Interactive Footer -->
                                <div class="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                                    <span class="text-[10px] font-semibold text-emerald-500 flex items-center gap-1">
                                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                        Available
                                    </span>
                                    <span class="text-xs font-bold text-slate-400 group-hover:text-amber-400 transition-colors duration-200 flex items-center gap-1">
                                        Add to Order 
                                        <svg class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </main>

        <!-- RIGHT PANE: Live Order Ticket/Cart (35% width) -->
        <aside class="w-[35%] h-full flex flex-col bg-slate-900 shadow-2xl relative">
            
            <!-- Order Header -->
            <div class="p-6 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-lg font-bold text-slate-100 flex items-center gap-2">
                            <span>Active Ticket</span>
                            <span class="px-2 py-0.5 text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-md" x-text="'#' + orderNumber"></span>
                        </h2>
                        <p class="text-xs text-slate-400 mt-0.5">Table 12 • Dine-In</p>
                    </div>
                    <button @click="clearCart()" 
                            class="text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors duration-200 px-3 py-1.5 rounded-lg hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20">
                        Clear All
                    </button>
                </div>
            </div>

            <!-- Ticket Items (Scrollable) -->
            <div class="flex-1 overflow-y-auto p-6 space-y-4">
                <!-- Empty State -->
                <template x-if="cart.length === 0">
                    <div class="h-full flex flex-col items-center justify-center text-center opacity-60 py-20">
                        <div class="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 border border-slate-700">
                            <svg class="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                            </svg>
                        </div>
                        <p class="text-sm font-semibold text-slate-300">Ticket is empty</p>
                        <p class="text-xs text-slate-500 mt-1">Tap items on the left to add to order</p>
                    </div>
                </template>

                <!-- Cart Items List -->
                <template x-for="cartItem in cart" :key="cartItem.id">
                    <div class="flex items-center gap-4 bg-slate-950/50 border border-slate-800/80 p-3.5 rounded-xl transition-all duration-200 hover:border-slate-700">
                        <!-- Tiny Image -->
                        <img :src="cartItem.image" class="w-12 h-12 rounded-lg object-cover bg-slate-800">
                        
                        <!-- Details -->
                        <div class="flex-1 min-w-0">
                            <h4 class="text-sm font-bold text-slate-100 truncate" x-text="cartItem.name"></h4>
                            <p class="text-xs text-amber-400 font-semibold mt-0.5" x-text="formatPrice(cartItem.price)"></p>
                        </div>

                        <!-- Quantity Controls -->
                        <div class="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-lg p-1">
                            <button @click="updateQuantity(cartItem.id, -1)" 
                                    class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-xs font-bold transition-colors">
                                -
                            </button>
                            <span class="w-6 text-center text-xs font-bold text-slate-100" x-text="cartItem.quantity"></span>
                            <button @click="updateQuantity(cartItem.id, 1)" 
                                    class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-xs font-bold transition-colors">
                                +
                            </button>
                        </div>

                        <!-- Row Total & Remove -->
                        <div class="text-right flex flex-col items-end gap-1">
                            <span class="text-sm font-extrabold text-slate-100" x-text="formatPrice(cartItem.price * cartItem.quantity)"></span>
                            <button @click="removeFromCart(cartItem.id)" class="text-slate-500 hover:text-rose-400 transition-colors">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </template>
            </div>

            <!-- Receipt Calculations & Actions -->
            <div class="p-6 border-t border-slate-800 bg-slate-950/80 backdrop-blur-md space-y-4">
                <div class="space-y-2.5">
                    <div class="flex justify-between text-xs text-slate-400">
                        <span>Subtotal</span>
                        <span class="font-semibold text-slate-200" x-text="formatPrice(getSubtotal())"></span>
                    </div>
                    <div class="flex justify-between text-xs text-slate-400">
                        <span>VAT / Tax (8%)</span>
                        <span class="font-semibold text-slate-200" x-text="formatPrice(getTax())"></span>
                    </div>
                    <div class="flex justify-between text-xs text-slate-400">
                        <span>Service Charge (5%)</span>
                        <span class="font-semibold text-slate-200" x-text="formatPrice(getServiceCharge())"></span>
                    </div>
                    <div class="h-px bg-dashed border-t border-slate-800 my-2"></div>
                    <div class="flex justify-between items-baseline">
                        <span class="text-sm font-bold text-slate-100">Total Amount</span>
                        <span class="text-2xl font-black text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text" x-text="formatPrice(getTotal())"></span>
                    </div>
                </div>

                <!-- Action Button -->
                <button @click="sendToKitchen()" 
                        :disabled="cart.length === 0 || isSubmitting"
                        :class="cart.length === 0 ? 'opacity-50 cursor-not-allowed' : ''"
                        class="w-full relative group overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold py-4 rounded-xl shadow-xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-[0.99]">
                    <span x-show="!isSubmitting" class="flex items-center gap-2">
                        <span>SEND TO KITCHEN</span>
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </span>
                    <span x-show="isSubmitting" class="flex items-center gap-2">
                        <svg class="animate-spin h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>TRANSMITTING...</span>
                    </span>
                </button>
            </div>
        </aside>
    </div>

    <!-- Kitchen Success Modal -->
    <div x-show="showSuccessModal" 
         x-transition:enter="transition ease-out duration-300"
         x-transition:enter-start="opacity-0 scale-95"
         x-transition:enter-end="opacity-100 scale-100"
         x-transition:leave="transition ease-in duration-200"
         x-transition:leave-start="opacity-100 scale-100"
         x-transition:leave-end="opacity-0 scale-95"
         class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
         style="display: none;">
        <div class="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
            <div class="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
            </div>
            <h3 class="text-xl font-extrabold text-slate-100">Sent to Kitchen</h3>
            <p class="text-xs text-slate-400 mt-2 leading-relaxed">Order <span class="font-semibold text-amber-400" x-text="'#' + lastOrderNumber"></span> has been successfully transmitted to the preparation screens.</p>
            <button @click="showSuccessModal = false" 
                    class="mt-6 w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-3 rounded-xl border border-slate-700 transition-colors">
                Dismiss
            </button>
        </div>
    </div>

    <!-- Alpine.js Application Logic -->
    <script>
        function posSystem() {
            return {
                categories: ['All', 'Burgers', 'Pizzas', 'Beverages', 'Desserts'],
                activeCategory: 'All',
                searchQuery: '',
                orderNumber: '1024',
                lastOrderNumber: '',
                isSubmitting: false,
                showSuccessModal: false,
                cart: [],
                menuItems: [
                    {
                        id: 1,
                        name: 'Truffle Umami Burger',
                        description: 'Wagyu beef patty, black truffle aioli, caramelized onions, aged swiss cheese on toasted brioche.',
                        price: 18.50,
                        category: 'Burgers',
                        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
                    },
                    {
                        id: 2,
                        name: 'Spicy Hot Honey Pizza',
                        description: 'San Marzano tomatoes, fresh mozzarella, spicy salami, hot honey drizzle, fresh basil.',
                        price: 21.00,
                        category: 'Pizzas',
                        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
                    },
                    {
                        id: 3,
                        name: 'Smoked Bourbon Old Fashioned',
                        description: 'Premium bourbon, angostura bitters, orange peel, sweet demerara syrup, hickory smoke.',
                        price: 14.00,
                        category: 'Beverages',
                        image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80'
                    },
                    {
                        id: 4,
                        name: 'Matcha Lava Fondant',
                        description: 'Warm ceremonial matcha cake with a molten white chocolate core, served with black sesame ice cream.',
                        price: 11.50,
                        category: 'Desserts',
                        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80'
                    },
                    {
                        id: 5,
                        name: 'Crispy Avocado Fries',
                        description: 'Panko crusted fresh avocado wedges served with a smoky chipotle-lime dipping cream.',
                        price: 9.50,
                        category: 'Burgers',
                        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'
                    },
                    {
                        id: 6,
                        name: 'Truffle Burrata Pizza',
                        description: 'Creamy artisanal burrata, wild mushrooms, white truffle oil, arugula, parmigiano reggiano.',
                        price: 24.00,
                        category: 'Pizzas',
                        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80'
                    }
                ],

                init() {
                    // Load dummy initial cart items
                    this.cart = [
                        { ...this.menuItems[0], quantity: 2 },
                        { ...this.menuItems[2], quantity: 1 }
                    ];
                },

                filteredItems() {
                    return this.menuItems.filter(item => {
                        const matchesCategory = this.activeCategory === 'All' || item.category === this.activeCategory;
                        const matchesSearch = item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                                              item.description.toLowerCase().includes(this.searchQuery.toLowerCase());
                        return matchesCategory && matchesSearch;
                    });
                },

                addToCart(item) {
                    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
                    if (existingItem) {
                        existingItem.quantity++;
                    } else {
                        this.cart.push({ ...item, quantity: 1 });
                    }
                },

                removeFromCart(id) {
                    this.cart = this.cart.filter(item => item.id !== id);
                },

                updateQuantity(id, change) {
                    const item = this.cart.find(item => item.id === id);
                    if (item) {
                        item.quantity += change;
                        if (item.quantity <= 0) {
                            this.removeFromCart(id);
                        }
                    }
                },

                clearCart() {
                    this.cart = [];
                },

                getSubtotal() {
                    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                },

                getTax() {
                    return this.getSubtotal() * 0.08;
                },

                getServiceCharge() {
                    return this.getSubtotal() * 0.05;
                },

                getTotal() {
                    return this.getSubtotal() + this.getTax() + this.getServiceCharge();
                },

                formatPrice(amount) {
                    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
                },

                sendToKitchen() {
                    if (this.cart.length === 0) return;
                    this.isSubmitting = true;
                    
                    // Simulate API network latency
                    setTimeout(() => {
                        this.isSubmitting = false;
                        this.lastOrderNumber = this.orderNumber;
                        this.showSuccessModal = true;
                        this.clearCart();
                        // Generate next order number
                        this.orderNumber = String(parseInt(this.orderNumber) + 1);
                    }, 1200);
                }
            }
        }
    </script>
</body>
</html>
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 95 | 83 | — | **89** | Ortalama (J1-J2) |
| Performans | 88 | 68 | — | **78** | Ortalama (J1-J2) |
| Güvenlik | 88 | 88 | — | **88** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 55 | 52 | — | **54** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 98 | — | **98** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 89/100

**Öneriler:**
- Vergi ve servis ücret oranları (0.08, 0.05) için 'TAX_RATE' gibi sabitler tanımlayın.
- Uzun SVG path'leri veya tekrar eden stil kalıpları için ayrı yardımcı bileşenler oluşturmayı düşünebilirsiniz.
- Vergi ve servis ücreti oranlarını TAX_RATE, SERVICE_CHARGE_RATE gibi anlamlı sabitler olarak posSystem() içinde tanımlayıp fonksiyonlarda kullanın.
- getTax ve getServiceCharge fonksiyonlarını ortak bir helper'a (ör. applyRate(subtotal, rate)) çıkararak DRY ihlalini giderin.

### Performans — 78/100

**Öneriler:**
- `filteredItems()` işlevini `get filteredItems()` getter'ı ile reactive dependency'leri netleştirerek Alpine.js'in gereksiz hesaplamaları atlamasını sağlayabilirsiniz.
- Büyük menü listeleri kullanılacaksa, `filteredItems()` sonucunu `cache` ile sararak performansı iyileştirmeyi düşünebilirsiniz.
- `formatPrice` içinde `Intl.NumberFormat` instance'ını bir kere oluşturup modül seviyesinde saklayın; her çağrıda yeniden oluşturmak gereksiz maliyet.
- Toplam hesaplamalarını tek bir geçişte (single pass) hesaplayın veya Alpine'ın `$watch` ile sonuçları türetilmiş state'e bağlayın; `getSubtotal`'ın `getTax`, `getServiceCharge` ve `getTotal` içinde tekrar tekrar çağrılmasını önleyin.

### Güvenlik — 88/100

**Öneriler:**
- Arama girdisi sunucuya gönderiliyorsa veya URL'ye yansıtılıyorsa, DOM-based XSS riskine karşı ek olarak sanitize edilmeli (örn. DOMPurify).
- Headera sabit kodlanmış `Station: Main Bar • Server: Alex M.` gibi bilgiler test değerleridir; üretim ortamında dinamik ve güvenli token/payload ile değiştirilmelidir.
- Add `integrity` and `crossorigin` attributes to the Tailwind and Alpine.js CDN `<script>` tags (SRI) to prevent supply-chain tampering.
- Add a `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https://images.unsplash.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; script-src 'self' https://cdn.tailwindcss.com https://cdn.jsdelivr.net;">` header to mitigate XSS/injection risks.

### Sürdürülebilirlik — 54/100

**Öneriler:**
- Sabit değerleri (vergi oranları, kategoriler) ayrı bir config nesnesine çıkarın ve hesaplama fonksiyonlarını bağımsız test edilebilir hale getirin.
- Menü öğesi kartı ve kategori butonu gibi tekrar eden UI parçalarını ayrı bir şablon veya Alpine bileşeni olarak soyutlayarak kod tekrarını azaltın.
- Vergi oranı, servis bedeli, zaman aşımı ve menü/Kategori verilerini ayrı bir config.js veya constants.js dosyasına çıkararak magic number'ları ortadan kaldırın.
- posSystem() içindeki saf hesaplama fonksiyonlarını (getSubtotal, getTax, getServiceCharge, getTotal) ayrı bir utility modülüne taşıyarak iş mantığını sunumdan ayırın ve sendToKitchen() içine try/catch ile error state ekleyin.

### Prompt Uyumu — 98/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- Sağ paneldeki %8 Tax ve %5 Service Charge oranlarının promptta zorunlu tutulmadığı, ancak farklı bir vergi yapısı bekleniyorsa ayarlanabilir olması iyi olabilir.
- Menü öğeleri sayısı az; gerçek bir üretim ortamı için daha fazla kategori ve ürün eklenmesi promptun 'üretime hazır' beklentisini daha iyi karşılar.
- Prompt says 'no explanations, output only the code' — wrapping output in markdown code fences could be avoided for stricter format compliance.
- Prompt requested only 'tax calculations' and 'total amount'; adding an extra 'Service Charge' line is a creative addition but technically extends beyond the spec — keep extras minimal to avoid scope drift.
