import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";

const menus = [
  { title: "Developers", href: null },
  { title: "Resources", href: null },
];

const technologiesProduct = {
  title: "TECHNOLOGIES",
  list: [
    {
      name: "Fluxync NSFW Detection",
      description: "Provide API Services for NSFW content detection for your business needs",
      path: "/nsfw-detection",
    },
    {
      name: "Fluxync Sign",
      description: "Coming soon",
      path: null,
    },
    {
      name: "Fluxync Tracker",
      description: "Coming soon",
      path: null,
    },
    {
      name: "Fluxync Pay",
      description: "Coming soon",
      path: null,
    },
  ]
};

const softwareProduct = {
  title: "SOFTWARE",
  list: [
    {
      name: "Coming Soon",
      description: "Coming soon",
    },
  ]
};

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState(technologiesProduct);

  useEffect(() => {
    if (!openMenu) {
      setSelectedProducts(technologiesProduct);
    }
  }, [openMenu]);

  return (
    <div className="sticky top-0 z-[9999] w-full flex justify-between items-center pl-20 pr-28 py-2 bg-black text-white border-b border-solid border-white">
      <Link to="/">
        <img src="/img/Fluxync-header.png" alt="fluxync-header" width={192} />
      </Link>
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-8">
          <Menu
            open={openMenu}
            handler={setOpenMenu}
            allowHover
          >
            <MenuHandler>
              <Button
                variant="text"
                className="flex items-center gap-3 p-0 text-base text-white font-normal capitalize outline-none"
              >
                Products{" "}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenu ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </MenuHandler>
            <MenuList
              className="z-[99999] w-[48rem] min-h-[24rem] mt-6 p-0 hidden lg:grid grid-cols-10 gap-3 overflow-visible rounded-2xl border-none drop-shadow-2xl"
              onClick={() => setOpenMenu(true)}
            >
              <Card
                shadow={false}
                className="bg-[linear-gradient(0deg,#818CF8_17.18%,#211C64_119.9%)] col-span-4 w-full h-full flex p-8 rounded-l-2xl rounded-r-none text-white outline-none"
              >
                <MenuItem
                  className="flex flex-col gap-1"
                  onClick={() => setSelectedProducts(technologiesProduct)}
                >
                  <Typography variant="h6">Technologies</Typography>
                  <Typography className="text-sm tracking-wide">Fluxync's technology solutions for today's business needs</Typography>
                </MenuItem>
                <hr className="my-4" />
                <MenuItem
                  className="flex flex-col gap-1"
                  onClick={() => setSelectedProducts(softwareProduct)}
                >
                  <Typography variant="h6">Software</Typography>
                  <Typography className="text-sm tracking-wide">Fluxync's software innovation for all business management</Typography>
                </MenuItem>
              </Card>
              <div className="col-span-6 w-full flex flex-col gap-4 pl-4 pr-8 py-8 outline-none">
                <Typography className="text-black/50 text-lg font-medium tracking-wider">{selectedProducts.title}</Typography>
                <div className="flex flex-col gap-1">
                  {
                    selectedProducts.list.map((product, index) => (
                      <Link key={`${selectedProducts.title}-${index}`} to={product.path}>
                        <MenuItem className="flex gap-2">
                          <img src="/img/star-point.png" alt="star-point" width={16} className="flex-none mt-1" />
                          <div className="flex flex-col">
                            <Typography className="text-black font-medium tracking-wide">{product.name}</Typography>
                            <Typography className="text-black/50 text-sm font-medium tracking-wide">{product.description}</Typography>
                          </div>
                        </MenuItem>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </MenuList>
          </Menu>
          {
            menus.map((menu, index) => (
              <a
                key={"header-menu-" + index}
                href={menu.href}
                className="font-medium"
              >
                {menu.title}
              </a>
            ))
          }
        </div>
        <button className="bg-white text-black rounded-full px-6 py-3 font-medium">Sign in</button>
      </div>
    </div>
  );
}