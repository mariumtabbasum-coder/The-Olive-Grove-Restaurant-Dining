import React, { useState } from 'react';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import { Download, Check } from 'lucide-react';

export const PriceListPage: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);

  const priceData = {
    mainCourses: [
      { name: 'Grilled Atlantic Salmon', desc: 'Served with seasonal asparagus & lemon herb butter', price: 18.00 },
      { name: 'Chicken Alfredo Pasta', desc: 'Handcrafted fettuccine with parmesan garlic cream', price: 16.00 },
      { name: 'Prime Beef Tenderloin Steak', desc: 'Truffle herb butter and red wine reduction', price: 23.00 },
      { name: 'Classic Margherita Pizza', desc: 'San Marzano passata, buffalo mozzarella & basil', price: 14.00 },
      { name: 'Mediterranean Vegetable Paella', desc: 'Saffron bomba rice, artichokes & roasted peppers', price: 15.00 },
      { name: 'Lemon Herb Roasted Chicken', desc: 'Free-range roasted chicken with rosemary potatoes', price: 15.00 },
    ],
    starters: [
      { name: 'Bruschetta Pomodoro', desc: 'Grilled sourdough with Roma tomatoes & basil', price: 10.00 },
      { name: 'Caprese Salad di Bufala', desc: 'Fresh buffalo mozzarella, vine tomatoes & balsamic', price: 11.00 },
      { name: 'Rustic Garlic Bread', desc: 'Whipped roasted garlic butter & fontina cheese', price: 6.00 },
      { name: 'Stuffed Portobello Caps', desc: 'Herb ricotta, sun-dried tomatoes & panko crust', price: 11.50 },
      { name: 'Creamy Tomato Bisqué', desc: 'San Marzano tomatoes, cream & focaccia crisp', price: 9.00 },
      { name: 'Crispy Calamari Fritti', desc: 'Lightly battered with smoked paprika aioli & lemon', price: 12.00 },
    ],
    desserts: [
      { name: 'Classic Venetian Tiramisu', desc: 'Espresso-soaked ladyfingers & mascarpone cream', price: 8.00 },
      { name: 'Belgian Molten Lava Cake', desc: 'Warm molten chocolate ganache & vanilla gelato', price: 8.00 },
      { name: 'New York Cheesecake', desc: 'Graham cracker crust with wild berry reduction', price: 7.00 },
      { name: 'Artisanal Gelato Trio', desc: 'Choice of Pistachio, Dark Chocolate, or Fior di Latte', price: 6.00 },
      { name: 'Seasonal Fruit Platter', desc: 'Fresh figs, berries, melon, and wildflower honey', price: 6.00 },
      { name: 'Wildflower Honey Panna Cotta', desc: 'Vanilla cream custard with toasted pistachio brittle', price: 7.50 },
    ],
    drinks: [
      { name: 'Fresh Mint Lemonade', desc: 'Sicilian lemons, spearmint & sparkling water', price: 5.00 },
      { name: 'Iced Coffee Tonic', desc: 'Single-origin espresso with botanical tonic', price: 4.50 },
      { name: 'Artisan Cappuccino', desc: 'Single-origin espresso & micro-foamed milk', price: 4.50 },
      { name: 'Espresso Doppio', desc: 'Rich double shot of roasted Arabica beans', price: 3.50 },
      { name: 'Chianti Classico Riserva (Glass)', desc: 'Vintage Tuscan red with dark cherry notes', price: 8.00 },
      { name: 'Sparkling Hibiscus Cooler', desc: 'Cold-steeped hibiscus flowers with fresh lime & soda', price: 5.50 },
    ],
  };

  const handleDownload = () => {
    let content = `====================================================\n`;
    content += `        THE OLIVE GROVE — RESTAURANT & DINING       \n`;
    content += `             OFFICIAL MENU PRICE LIST 2026          \n`;
    content += `====================================================\n\n`;

    content += `--- MAIN COURSES ---\n`;
    priceData.mainCourses.forEach((item) => {
      content += `${item.name.padEnd(35, '.')} $${item.price.toFixed(2)}\n   (${item.desc})\n`;
    });

    content += `\n--- STARTERS ---\n`;
    priceData.starters.forEach((item) => {
      content += `${item.name.padEnd(35, '.')} $${item.price.toFixed(2)}\n   (${item.desc})\n`;
    });

    content += `\n--- DESSERTS ---\n`;
    priceData.desserts.forEach((item) => {
      content += `${item.name.padEnd(35, '.')} $${item.price.toFixed(2)}\n   (${item.desc})\n`;
    });

    content += `\n--- DRINKS & BEVERAGES ---\n`;
    priceData.drinks.forEach((item) => {
      content += `${item.name.padEnd(35, '.')} $${item.price.toFixed(2)}\n   (${item.desc})\n`;
    });

    content += `\n====================================================\n`;
    content += `Address: 123 Green Valley Road, Olive District\n`;
    content += `Phone: +92 300 1234567 | hello@theolivegrove.com\n`;
    content += `Website: theolivegrove.restaurant\n`;
    content += `Prices are subject to 8% applicable local dining tax.\n`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'The_Olive_Grove_Price_List_2026.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <main className="section-cream pb-5">
      {/* Elevated Header Banner with Background Image & Dark Overlay */}
      <section
        className="page-hero-banner"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80')`,
        }}
      >
        <div className="page-hero-overlay" />
        <div className="page-hero-leaf-left">
          <BotanicalLeaf color="#d4af37" />
        </div>
        <div className="page-hero-leaf-right">
          <BotanicalLeaf color="#d4af37" />
        </div>

        <div className="page-hero-content">
          <span className="eyebrow-text">Transparent Quality</span>
          <h1 className="page-hero-title">Our Price List</h1>
          <p className="page-hero-desc mb-4">
            Exceptional Food. Honest Prices. Handcrafted Mediterranean cuisine without hidden charges.
          </p>

          {/* Working Real Download Price List Button */}
          <button
            type="button"
            className="btn-primary-gold"
            onClick={handleDownload}
            style={{ margin: '0 auto' }}
          >
            {downloaded ? <Check size={18} /> : <Download size={18} />}
            <span>{downloaded ? 'Price List Downloaded!' : 'Download Price List'}</span>
          </button>
        </div>
      </section>

      {/* Categorized Columns Grid with Equalized Sizing */}
      <div className="content-container pt-5">
        <div className="row g-4 align-items-stretch">
          {/* Col 1: Main Courses */}
          <div className="col-lg-6">
            <div className="price-list-category-card">
              <h3 className="price-list-cat-title">Main Courses</h3>
              <div className="price-list-items-container">
                {priceData.mainCourses.map((item, i) => (
                  <div key={i} className="price-row-item">
                    <div>
                      <span className="price-item-name">{item.name}</span>
                      <span className="price-item-desc">{item.desc}</span>
                    </div>
                    <span className="price-item-val">${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Starters */}
          <div className="col-lg-6">
            <div className="price-list-category-card">
              <h3 className="price-list-cat-title">Starters & Appetizers</h3>
              <div className="price-list-items-container">
                {priceData.starters.map((item, i) => (
                  <div key={i} className="price-row-item">
                    <div>
                      <span className="price-item-name">{item.name}</span>
                      <span className="price-item-desc">{item.desc}</span>
                    </div>
                    <span className="price-item-val">${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3: Desserts */}
          <div className="col-lg-6">
            <div className="price-list-category-card">
              <h3 className="price-list-cat-title">Artisanal Desserts</h3>
              <div className="price-list-items-container">
                {priceData.desserts.map((item, i) => (
                  <div key={i} className="price-row-item">
                    <div>
                      <span className="price-item-name">{item.name}</span>
                      <span className="price-item-desc">{item.desc}</span>
                    </div>
                    <span className="price-item-val">${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Col 4: Drinks */}
          <div className="col-lg-6">
            <div className="price-list-category-card">
              <h3 className="price-list-cat-title">Beverages & Wine</h3>
              <div className="price-list-items-container">
                {priceData.drinks.map((item, i) => (
                  <div key={i} className="price-row-item">
                    <div>
                      <span className="price-item-name">{item.name}</span>
                      <span className="price-item-desc">{item.desc}</span>
                    </div>
                    <span className="price-item-val">${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Note on allergies / service */}
        <div className="text-center mt-4">
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
            * All prices in USD. Please notify our staff of any dietary sensitivities or food allergies before ordering.
          </p>
        </div>
      </div>
    </main>
  );
};
