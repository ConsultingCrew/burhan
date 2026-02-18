
// Product data for modals
const productDetails = {
    'cotton-poplin': {
        name: '100% Cotton Poplin',
        category: 'Greige',
        description: 'Premium quality cotton poplin, perfect for shirting and dress applications. Smooth finish with excellent dye uptake.',
        construction: '40x40 / 133x72',
        composition: '100% Cotton',
        weight: '110 GSM',
        width: '58"',
        moq: '3,000 meters',
        leadTime: 'Immediate',
        stock: '15,000 meters'
    },
    'cotton-voile': {
        name: 'Cotton Voile',
        category: 'Greige',
        description: 'Lightweight, sheer cotton voile ideal for summer garments and scarves.',
        construction: '60x60 / 90x80',
        composition: '100% Cotton',
        weight: '75 GSM',
        width: '58"',
        moq: '2,000 meters',
        leadTime: 'Immediate',
        stock: '8,500 meters'
    },
    'cotton-cambric': {
        name: 'Cotton Cambric',
        category: 'Greige',
        description: 'Fine, closely woven cambric with smooth surface. Excellent for premium garments.',
        construction: '80x80 / 140x120',
        composition: '100% Cotton',
        weight: '95 GSM',
        width: '58"',
        moq: '2,500 meters',
        leadTime: 'Immediate',
        stock: '12,000 meters'
    },
    'cotton-sateen': {
        name: 'Cotton Sateen',
        category: 'Greige',
        description: 'Luxurious sateen weave with subtle sheen. Perfect for high-end bedding and apparel.',
        construction: '60x60 / 180x120',
        composition: '100% Cotton',
        weight: '140 GSM',
        width: '58"',
        moq: '2,000 meters',
        leadTime: 'Immediate',
        stock: '6,000 meters'
    },
    'poly-cotton-blend': {
        name: 'Poly-Cotton Blend',
        category: 'Greige',
        description: 'Durable poly-cotton blend offering easy care and wrinkle resistance.',
        construction: '45x45 / 110x70',
        composition: '65% Polyester / 35% Cotton',
        weight: '105 GSM',
        width: '58"',
        moq: '4,000 meters',
        leadTime: 'Immediate',
        stock: '20,000 meters'
    },
    'reactive-dyed-poplin': {
        name: 'Reactive Dyed Poplin',
        category: 'Dyed',
        description: 'Vibrant reactive dyed poplin with excellent color fastness. Available in multiple colors.',
        construction: '40x40 / 133x72',
        composition: '100% Cotton',
        weight: '110 GSM',
        width: '58"',
        moq: '2,000 meters',
        leadTime: 'Immediate',
        stock: '5,000 meters',
        colors: 'White, Black, Navy, Red, Green, Blue, Yellow'
    },
    'pigment-dyed-canvas': {
        name: 'Pigment Dyed Canvas',
        category: 'Dyed',
        description: 'Heavy-duty canvas with vintage pigment dye effect. Perfect for bags and outerwear.',
        construction: '20x20 / 60x40',
        composition: '100% Cotton',
        weight: '280 GSM',
        width: '58"',
        moq: '2,000 meters',
        leadTime: 'Immediate',
        stock: '3,500 meters'
    },
    'vat-dyed-drill': {
        name: 'Vat Dyed Drill',
        category: 'Dyed',
        description: 'Deep, rich vat dyed colors with superior wash fastness. Ideal for workwear.',
        construction: '16x12 / 80x40',
        composition: '100% Cotton',
        weight: '240 GSM',
        width: '58"',
        moq: '2,000 meters',
        leadTime: 'Immediate',
        stock: '4,000 meters'
    },
    'sulfur-dyed-denim': {
        name: 'Sulfur Dyed Denim (Light)',
        category: 'Denim',
        description: 'Lightweight sulfur dyed denim with authentic vintage character.',
        construction: '7x7 / 60x40',
        composition: '100% Cotton',
        weight: '12 oz',
        width: '60"',
        moq: '3,000 meters',
        leadTime: 'Immediate',
        stock: '7,000 meters'
    },
    'floral-cotton-print': {
        name: 'Floral Cotton Print',
        category: 'Printed',
        description: 'Beautiful floral designs on premium poplin base. Perfect for women\'s wear.',
        construction: '40x40 / 133x72',
        composition: '100% Cotton',
        weight: '110 GSM',
        width: '58"',
        moq: '1,500 meters',
        leadTime: 'Immediate',
        stock: '2,500 meters'
    },
    'geometric-voile-print': {
        name: 'Geometric Voile Print',
        category: 'Printed',
        description: 'Contemporary geometric patterns on lightweight voile.',
        construction: '60x60 / 90x80',
        composition: '100% Cotton',
        weight: '75 GSM',
        width: '58"',
        moq: '1,000 meters',
        leadTime: 'Immediate',
        stock: '1,800 meters'
    },
    'paisley-lawn-print': {
        name: 'Paisley Lawn Print',
        category: 'Printed',
        description: 'Classic paisley designs on soft lawn fabric. Ideal for summer collections.',
        construction: '70x70 / 100x80',
        composition: '100% Cotton',
        weight: '85 GSM',
        width: '58"',
        moq: '1,500 meters',
        leadTime: 'Immediate',
        stock: '3,200 meters'
    },
    'digital-print-sateen': {
        name: 'Digital Print Sateen',
        category: 'Printed',
        description: 'High-definition digital prints on luxurious sateen base.',
        construction: '60x60 / 180x120',
        composition: '100% Cotton',
        weight: '140 GSM',
        width: '58"',
        moq: '1,000 meters',
        leadTime: 'Immediate',
        stock: '1,500 meters'
    },
    'classic-indigo-denim': {
        name: 'Classic Indigo Denim',
        category: 'Denim',
        description: 'Authentic rope-dyed indigo denim with classic red selvedge.',
        construction: '7x7 / 60x40',
        composition: '100% Cotton',
        weight: '12 oz',
        width: '60"',
        moq: '3,000 meters',
        leadTime: 'Immediate',
        stock: '10,000 meters'
    },
    'stretch-denim': {
        name: 'Stretch Denim',
        category: 'Denim',
        description: 'Comfort stretch denim with excellent recovery. Perfect for skinny jeans.',
        construction: '7x7 + Lycra',
        composition: '98% Cotton, 2% Elastane',
        weight: '11 oz',
        width: '60"',
        moq: '3,000 meters',
        leadTime: 'Immediate',
        stock: '6,500 meters'
    },
    'black-denim': {
        name: 'Black Denim',
        category: 'Denim',
        description: 'Deep black sulfur-dyed denim with excellent color retention.',
        construction: '7x7 / 60x40',
        composition: '100% Cotton',
        weight: '12 oz',
        width: '60"',
        moq: '2,500 meters',
        leadTime: 'Immediate',
        stock: '4,000 meters'
    },
    'colored-denim': {
        name: 'Colored Denim',
        category: 'Denim',
        description: 'Fashion colors including grey, olive, and burgundy.',
        construction: '7x7 / 60x40',
        composition: '100% Cotton',
        weight: '11 oz',
        width: '60"',
        moq: '2,500 meters',
        leadTime: 'Immediate',
        stock: '3,000 meters'
    },
    'single-jersey': {
        name: 'Single Jersey',
        category: 'Knits',
        description: 'Soft, breathable single jersey perfect for t-shirts and casual wear.',
        construction: '24 gauge',
        composition: '100% Cotton',
        weight: '160 GSM',
        width: '66"',
        moq: '500 kg',
        leadTime: 'Immediate',
        stock: '2,000 kg'
    },
    'pique-knit': {
        name: 'Pique Knit',
        category: 'Knits',
        description: 'Classic pique texture ideal for polo shirts.',
        construction: '18 gauge',
        composition: '100% Cotton',
        weight: '200 GSM',
        width: '66"',
        moq: '500 kg',
        leadTime: 'Immediate',
        stock: '1,500 kg'
    },
    'rib-knit': {
        name: 'Rib Knit',
        category: 'Knits',
        description: 'Stretch rib knit perfect for cuffs, collars, and waistbands.',
        construction: '14 gauge',
        composition: '100% Cotton',
        weight: '220 GSM',
        width: '35"',
        moq: '300 kg',
        leadTime: 'Immediate',
        stock: '800 kg'
    },
    'french-terry': {
        name: 'French Terry',
        category: 'Knits',
        description: 'Comfortable French terry with looped back. Ideal for sweatshirts.',
        construction: '18 gauge',
        composition: '100% Cotton',
        weight: '280 GSM',
        width: '66"',
        moq: '500 kg',
        leadTime: 'Immediate',
        stock: '1,200 kg'
    },
    'interlock': {
        name: 'Interlock',
        category: 'Knits',
        description: 'Smooth, stable interlock knit with excellent drape.',
        construction: '20 gauge',
        composition: '100% Cotton',
        weight: '180 GSM',
        width: '66"',
        moq: '500 kg',
        leadTime: 'Immediate',
        stock: '1,000 kg'
    }
};

// Function to open product modal
function openProductModal(productId) {
    const product = productDetails[productId];
    if (!product) return;
    
    const colorsHTML = product.colors ? 
        `<p><strong>Available Colors:</strong> ${product.colors}</p>` : '';
    
    const modalHTML = `
        <div class="modal-overlay" id="productModal">
            <div class="modal-container">
                <button class="modal-close" onclick="closeProductModal()">&times;</button>
                <div class="modal-content">
                    <div style="padding: 20px;">
                        <span style="background: var(--primary-color); color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.9rem;">${product.category}</span>
                        <h2 style="font-size: 2rem; color: var(--primary-color); margin: 15px 0;">${product.name}</h2>
                        
                        <div style="background: #f7f1e0ff; padding: 20px; border-radius: 10px; margin: 20px 0;">
                            <p style="font-size: 1.1rem; line-height: 1.8;">${product.description}</p>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: repeat(2,1fr); gap: 15px; margin: 30px 0;">
                            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                <strong>Construction:</strong><br> ${product.construction}
                            </div>
                            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                <strong>Composition:</strong><br> ${product.composition}
                            </div>
                            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                <strong>Weight:</strong><br> ${product.weight}
                            </div>
                            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                <strong>Width:</strong><br> ${product.width}
                            </div>
                            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                <strong>MOQ:</strong><br> ${product.moq}
                            </div>
                            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                <strong>Lead Time:</strong><br> ${product.leadTime}
                            </div>
                        </div>
                        
                        ${colorsHTML}
                        
                        <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
                            <div style="display: flex; align-items: center;">
                                <i class="fas fa-check-circle" style="color: #28a745; font-size: 2rem; margin-right: 15px;"></i>
                                <div>
                                    <h4 style="color: #28a745; margin: 0;">In Stock</h4>
                                    <p style="margin: 5px 0 0;">${product.stock} available for immediate delivery</p>
                                </div>
                            </div>
                        </div>
                        
                        <div style="display: flex; gap: 20px; margin-top: 30px;">
                            <button onclick="requestQuote('${product.name}')" style="flex:1; background: var(--primary-color); color: white; padding: 15px; border: none; border-radius: 8px; font-size: 1.1rem; cursor: pointer;">
                                <i class="fas fa-file-invoice"></i> Request Quote
                            </button>
                            <button onclick="orderSample('${product.name}')" style="flex:1; background: var(--accent-color); color: white; padding: 15px; border: none; border-radius: 8px; font-size: 1.1rem; cursor: pointer;">
                                <i class="fas fa-flask"></i> Order Sample
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal
    const existingModal = document.getElementById('productModal');
    if (existingModal) existingModal.remove();
    
    // Add and show modal
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.getElementById('productModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function quickInquiry(productName) {
    alert(`Inquiry sent for ${productName}. Our team will contact you shortly.`);
}

function requestQuote(productName) {
    alert(`Quote requested for ${productName}. Our sales team will respond within 24 hours.`);
    closeProductModal();
}

function orderSample(productName) {
    alert(`Sample order placed for ${productName}. Sample will be dispatched within 2-3 business days.`);
    closeProductModal();
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('productModal');
    if (modal && event.target === modal) {
        closeProductModal();
    }
});