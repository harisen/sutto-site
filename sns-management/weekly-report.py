#!/usr/bin/env python3
"""
週間レポート生成
投稿パフォーマンスの分析
"""

import json
import datetime
import os

def generate_weekly_report():
    """週間レポートを生成"""
    
    # サンプルデータ（実際はX Analyticsから取得）
    sample_metrics = {
        "月曜日": {"impressions": 1234, "likes": 45, "retweets": 12, "clicks": 23},
        "火曜日": {"impressions": 987, "likes": 32, "retweets": 8, "clicks": 15},
        "水曜日": {"impressions": 1456, "likes": 67, "retweets": 23, "clicks": 34},
        "木曜日": {"impressions": 2345, "likes": 89, "retweets": 34, "clicks": 56},
        "金曜日": {"impressions": 1876, "likes": 56, "retweets": 19, "clicks": 41},
        "土曜日": {"impressions": 1234, "likes": 41, "retweets": 15, "clicks": 28},
        "日曜日": {"impressions": 987, "likes": 29, "retweets": 9, "clicks": 19},
    }
    
    print("\n" + "="*60)
    print("📊 週間投稿レポート")
    print(f"期間: {datetime.datetime.now().strftime('%Y年%m月%d日')} までの1週間")
    print("="*60)
    
    # 合計を計算
    total_impressions = sum(m["impressions"] for m in sample_metrics.values())
    total_likes = sum(m["likes"] for m in sample_metrics.values())
    total_retweets = sum(m["retweets"] for m in sample_metrics.values())
    total_clicks = sum(m["clicks"] for m in sample_metrics.values())
    
    print("\n【週間サマリー】")
    print(f"総インプレッション: {total_impressions:,}")
    print(f"総いいね数: {total_likes}")
    print(f"総リツイート数: {total_retweets}")
    print(f"総クリック数: {total_clicks}")
    print(f"エンゲージメント率: {((total_likes + total_retweets) / total_impressions * 100):.2f}%")
    
    print("\n【曜日別パフォーマンス】")
    print("-"*60)
    print(f"{'曜日':<10} {'インプレッション':>12} {'いいね':>8} {'RT':>6} {'クリック':>8}")
    print("-"*60)
    
    best_day = ""
    best_engagement = 0
    
    for day, metrics in sample_metrics.items():
        engagement = (metrics["likes"] + metrics["retweets"]) / metrics["impressions"] * 100
        if engagement > best_engagement:
            best_engagement = engagement
            best_day = day
            
        print(f"{day:<10} {metrics['impressions']:>12,} {metrics['likes']:>8} "
              f"{metrics['retweets']:>6} {metrics['clicks']:>8}")
    
    print("-"*60)
    
    print(f"\n📈 最もエンゲージメントが高い曜日: {best_day} ({best_engagement:.2f}%)")
    
    print("\n【改善提案】")
    print("• 木曜日の投稿が最も反応が良い → サービス紹介を継続")
    print("• 週末は反応が低め → 投稿時間を調整検討")
    print("• 水曜日のTips投稿も好評 → コンテンツを増やす")
    
    # レポートをファイルに保存
    report_data = {
        "generated_at": datetime.datetime.now().isoformat(),
        "weekly_metrics": sample_metrics,
        "totals": {
            "impressions": total_impressions,
            "likes": total_likes,
            "retweets": total_retweets,
            "clicks": total_clicks
        },
        "best_day": best_day
    }
    
    filename = f"weekly_report_{datetime.datetime.now().strftime('%Y%m%d')}.json"
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(report_data, f, ensure_ascii=False, indent=2)
    
    print(f"\n💾 レポートを保存しました: {filename}")

if __name__ == "__main__":
    generate_weekly_report()