import os
from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Get the absolute path to the index.html file
        file_path = os.path.abspath('index.html')

        # Go to the local HTML file
        page.goto(f'file://{file_path}')

        # Wait for the page to load and projects to be rendered
        expect(page.locator('.project-card')).to_have_count(7)

        # Take a screenshot of the initial state
        page.screenshot(path="jules-scratch/verification/verification_before_scroll.png")

        # Hover over the first carousel to reveal the scroll buttons
        page.hover('.project-carousel')

        # Find the 'next' button for the featured projects and click it
        featured_carousel = page.locator('.project-carousel').first
        next_button = featured_carousel.locator('.scroll-button.next')

        expect(next_button).to_be_visible()
        next_button.click()

        # Wait for the smooth scroll to finish
        page.wait_for_timeout(1000) # 1 second wait for scroll animation

        # Take a screenshot of the scrolled state
        page.screenshot(path="jules-scratch/verification/verification.png")

        browser.close()

if __name__ == "__main__":
    run_verification()
