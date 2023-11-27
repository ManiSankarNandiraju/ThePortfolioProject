import pygame
import sys

pygame.init()

# Set up display
width, height = 800, 600
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Pixel Character Walk")

# Load character image
character_image = pygame.image.load("character.png")
character_rect = character_image.get_rect()
character_speed = 5

clock = pygame.time.Clock()

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT]:
        character_rect.x -= character_speed
    if keys[pygame.K_RIGHT]:
        character_rect.x += character_speed
    if keys[pygame.K_UP]:
        character_rect.y -= character_speed
    if keys[pygame.K_DOWN]:
        character_rect.y += character_speed

    # Clear the screen
    screen.fill((255, 255, 255))

    # Draw the character
    screen.blit(character_image, character_rect)

    # Update the display
    pygame.display.flip()

    # Cap the frame rate
    clock.tick(30)