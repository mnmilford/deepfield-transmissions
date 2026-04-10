import os

bg_dir = '/root/Projects/deepfield-transmissions/backgrounds'
ig_dir = '/root/Projects/deepfield-transmissions/instagram'
files = sorted([f for f in os.listdir(bg_dir) if f.endswith('.png')], reverse=True)

html = '<div class="background-grid">\n'

for f in files:
    # 2026-03-06-amsterdam.png -> Amsterdam (March 6, 2026)
    parts = f.replace('.png', '').split('-')
    year, month, day = parts[:3]
    name_parts = parts[3:]
    name = ' '.join(name_parts).title()
    if not name:
        name = "Transmission"
    
    date_str = f"{year}-{month}-{day}"
    
    # Check for mobile version in instagram/
    # Filename pattern: YYYY-MM-DD-city-1.png or YYYY-MM-DD-city-topic-1.png
    base_prefix = f"{year}-{month}-{day}-" + '-'.join(name_parts)
    mobile_file = f"{base_prefix}-1.png"
    mobile_path = os.path.join(ig_dir, mobile_file)
    
    mobile_btn = ""
    if os.path.exists(mobile_path):
        mobile_btn = f'\n          <a href="instagram/{mobile_file}" download class="download-btn mobile">Download Mobile</a>'
    
    html += f'''  <div class="bg-card">
    <div class="bg-preview">
      <img src="backgrounds/{f}" alt="{name}" loading="lazy">
    </div>
    <div class="bg-info">
      <div class="bg-name">{name}</div>
      <div class="bg-date">{date_str}</div>
      <div class="bg-actions">
        <div class="btn-group">
          <a href="backgrounds/{f}" download class="download-btn">Download 4K</a>{mobile_btn}
        </div>
      </div>
    </div>
  </div>\n'''

html += '</div>'

print(html)
