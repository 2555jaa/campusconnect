import os
import re

components_dir = 'src/components'

replacements = [
    (r'\bbg-\[\#F8FAFC\]\b(?! dark:)', r'bg-[#F8FAFC] dark:bg-[#0F172A]'),
    (r'\bbg-white\b(?!/)(?! border)(?! shadow)(?! dark:)', r'bg-white dark:bg-slate-900'),
    (r'\btext-navy-500\b(?! dark:)', r'text-navy-500 dark:text-white'),
    (r'\btext-gray-600\b(?! dark:)', r'text-gray-600 dark:text-gray-300'),
    (r'\btext-gray-500\b(?! dark:)', r'text-gray-500 dark:text-gray-400'),
    (r'\btext-gray-700\b(?! dark:)', r'text-gray-700 dark:text-gray-200'),
    (r'\bborder-gray-100\b(?!/)', r'border-gray-100 dark:border-slate-800'),
    (r'\bborder-gray-200\b(?!/)', r'border-gray-200 dark:border-slate-700'),
    (r'\bbg-gray-50\b(?!/)', r'bg-gray-50 dark:bg-slate-800/50'),
    (r'\bbg-gray-100\b(?!/)', r'bg-gray-100 dark:bg-slate-800'),
    (r'\bbg-white/80\b(?! dark:)', r'bg-white/80 dark:bg-slate-900/80'),
    (r'\bbg-white/90\b(?! dark:)', r'bg-white/90 dark:bg-slate-900/90'),
    (r'\bbg-white/70\b(?! dark:)', r'bg-white/70 dark:bg-slate-900/70'),
    (r'\bbg-gradient-to-b from-\[\#F8FAFC\] via-white to-\[\#F8FAFC\]\b', r'bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] dark:from-[#0F172A] dark:via-slate-900 dark:to-[#0F172A]'),
]

for filename in os.listdir(components_dir):
    if filename == 'Navbar.jsx' or filename == 'DownloadSection.jsx':
        continue # skip these, already handled or intentionally dark
    if filename.endswith('.jsx'):
        filepath = os.path.join(components_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = content
        for pattern, replacement in replacements:
            new_content = re.sub(pattern, replacement, new_content)
            
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f'Updated {filename}')
