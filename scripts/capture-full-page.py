#!/usr/bin/env python3
"""
ウェブサイト全体を縦長の画像として保存
"""

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time
import os

def capture_full_page(url, output_name):
    """ページ全体をキャプチャ"""
    
    # Chromeオプション設定
    options = Options()
    options.add_argument('--headless')  # ヘッドレスモード
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    
    # ドライバー初期化
    driver = webdriver.Chrome(options=options)
    
    try:
        # ページを開く
        print(f"📄 {url} を開いています...")
        driver.get(url)
        time.sleep(3)  # ページ読み込み待機
        
        # ページの高さを取得
        height = driver.execute_script("return document.body.scrollHeight")
        width = driver.execute_script("return document.body.scrollWidth")
        
        # ウィンドウサイズを設定（モバイル対応のため幅は1200px固定）
        driver.set_window_size(1200, height)
        time.sleep(1)
        
        # スクリーンショット保存
        output_path = f"captures/{output_name}.png"
        os.makedirs("captures", exist_ok=True)
        driver.save_screenshot(output_path)
        
        print(f"✅ 保存完了: {output_path}")
        print(f"📐 サイズ: {width}x{height}px")
        
        return output_path
        
    finally:
        driver.quit()

# サンプルサイト一覧
SAMPLE_SITES = [
    ("beauty-salon", "https://lp-service-site.vercel.app/samples/beauty-salon/"),
    ("restaurant", "https://lp-service-site.vercel.app/samples/restaurant/"),
    ("law-firm", "https://lp-service-site.vercel.app/samples/law-firm/"),
    ("cosmetics", "https://lp-service-site.vercel.app/samples/cosmetics/"),
    ("fitness", "https://lp-service-site.vercel.app/samples/fitness/"),
    ("wedding", "https://lp-service-site.vercel.app/samples/wedding/"),
    ("ec-fashion", "https://lp-service-site.vercel.app/samples/ec-fashion/"),
    ("event", "https://lp-service-site.vercel.app/samples/event/"),
    ("tax-accountant", "https://lp-service-site.vercel.app/samples/tax-accountant/"),
]

def main():
    print("=" * 60)
    print("🖼️ サイト全体キャプチャツール")
    print("=" * 60)
    
    print("\nキャプチャする対象を選択してください：")
    print("1. メインサイト")
    print("2. 全サンプルサイト")
    print("3. 特定のサンプルサイト")
    print("4. カスタムURL")
    
    choice = input("\n選択 (1-4): ")
    
    if choice == "1":
        capture_full_page("https://lp-service-site.vercel.app", "main-site")
        
    elif choice == "2":
        print("\n全サンプルサイトをキャプチャします...")
        for name, url in SAMPLE_SITES:
            print(f"\n🔄 {name} をキャプチャ中...")
            capture_full_page(url, f"sample-{name}")
            
    elif choice == "3":
        print("\nサンプルサイトを選択：")
        for i, (name, _) in enumerate(SAMPLE_SITES, 1):
            print(f"{i}. {name}")
        
        num = int(input("\n番号: ")) - 1
        if 0 <= num < len(SAMPLE_SITES):
            name, url = SAMPLE_SITES[num]
            capture_full_page(url, f"sample-{name}")
            
    elif choice == "4":
        url = input("\nURL: ")
        name = input("保存名: ")
        capture_full_page(url, name)
    
    print("\n✅ 完了！")
    print("\n💡 PNGからJPGへの変換が必要な場合：")
    print("- Windowsの「ペイント」で開いて別名保存")
    print("- オンラインツール（convertio.co など）")
    print("- 画像編集ソフト")

if __name__ == "__main__":
    main()