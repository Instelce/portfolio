<ul class="sidebar">
    <li><a class="active" href="#">About</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Experiences</a></li>
    <li><a href="#">Contacts</a></li>
</ul>

<style>
    .sidebar {
        right: 0px; top: 50%;
        position: fixed;
        transform: translateY(-50%) translateX(35%) rotateZ(90deg);

        display: flex;

        font-family: var(--font-secondary);
        font-weight: 200;
    }

    li {
        display: inline-block;
    }

    a {
        padding: 5px 20px;
        color: rgba(53, 180, 255, 0.60);
        display: inline-block;
        position: relative;
        transform: translateZ(0) translate3d(0, 0, 0);
        filter: blur(0);
        backface-visibility: hidden;
    }

    a::after {
        width: 100%;
        height: 1px;
        top: 50%; left: 0%;
        position: absolute;
        content: "";

        background: var(--color-blue-jeans);

        transform: scaleX(0) translate(0%, -50%);
        transform-origin: right;
        transition: transform 0.5s;
    }

    a:hover::after {
        transform: scaleX(1) translate(0%, -50%);
        transform-origin: left;
    }

    .active {
        color: var(--color-blue-jeans);
    }
</style>