declare const enum ObjectName {
    AssetBundle = "Custom_Assetbundle",
    BackgammonBoard = "backgammon_board",
    BackgammonPieceBrown = "backgammon_piece_brown",
    BackgammonPieceWhite = "backgammon_piece_white",
    Bag = "Bag",
    BlockRectangle = "BlockRectangle",
    BlockSquare = "BlockSquare",
    BlockTriangle = "BlockTriangle",
    Board = "Custom_Board",
    Card = "Card",
    CardCustom = "CardCustom",
    CheckerBlack = "Checker_black",
    CheckerBoard = "Checker_Board",
    CheckerRed = "Checker_red",
    CheckerWhite = "Checker_white",
    ChessBishop = "Chess_Bishop",
    ChessBoard = "Chess_Board",
    ChessKing = "Chess_King",
    ChessKnight = "Chess_Knight",
    ChessPawn = "Chess_Pawn",
    ChessQueen = "Chess_Queen",
    ChessRook = "Chess_Rook",
    ChineseCheckersBoard = "Chinese_Checkers_Board",
    ChineseCheckersPiece = "Chinese_Checkers_Piece",
    Chip10 = "Chip_10",
    Chip50 = "Chip_50",
    Chip100 = "Chip_100",
    Chip500 = "Chip_500",
    ChiP1000 = "Chip_1000",
    Deck = "Deck",
    DeckCardBotHead = "Deck_CardBot_Head",
    DeckCardBotMain = "Deck_CardBot_Main",
    DeckCustom = "DeckCustom",
    Die4 = "Die_4",
    Die6 = "Die_6",
    Die6Rounded = "Die_6_Rounded",
    Die8 = "Die_8",
    Die10 = "Die_10",
    Die12 = "Die_12",
    Die20 = "Die_20",
    DieCustom = "Custom_Dice",
    DiePiecepack = "Die_Piecepack",
    DigitalClock = "Digital_Clock",
    Domino = "Domino",
    FigurineCardBot = "Figurine_Card_Bot",
    FigurineCustom = "Figurine_Custom",
    FigurineKimiKat = "Figurine_Kimi_Kat",
    FigurineKnil = "Figurine_Knil",
    FigurineMara = "Figurine_Mara",
    FigurineSirLoin = "Figurine_Sir_Loin",
    FigurineZeke = "Figurine_Zeke",
    FigurineZomblor = "Figurine_Zomblor",
    GoBoard = "Go_Board",
    GoGameBowlBlack = "go_game_bowl_black",
    GoGameBowlWhite = "go_game_bowl_white",
    GoGamePieceBlack = "go_game_piece_black",
    GoGamePieceWhite = "go_game_piece_white",
    InfiniteBag = "Infinite_Bag",
    MahjongTile = "Mahjong_Tile",
    MetalBall = "Ball",
    Model = "Custom_Model",
    ModelBag = "Custom_Model_Bag",
    Pachisiboard = "Pachisi_board",
    PlayerPawn = "PlayerPawn",
    Quarter = "Quarter",
    ReversiBoard = "reversi_board",
    ReversiChip = "reversi_chip",
    RPGBear = "rpg_BEAR",
    RPGChimera = "rpg_CHIMERA",
    RPGCyclop = "rpg_CYCLOP",
    RPGDragonide = "rpg_DRAGONIDE",
    RPGEvilWatcher = "rpg_EVIL_WATCHER",
    RPGGhoul = "rpg_GHOUL",
    RPGGiantViper = "rpg_GIANT_VIPER",
    RPGGoblin = "rpg_GOBLIN",
    RPGGolem = "rpg_GOLEM",
    RPGGriffon = "rpg_GRIFFON",
    RPGHydra = "rpg_HYDRA",
    RPGKobold = "rpg_KOBOLD",
    RPGLizardWarrior = "rpg_LIZARD_WARRIOR",
    RPGManticora = "rpg_MANTICORA",
    RPGMummy = "rpg_MUMMY",
    RPGOgre = "rpg_OGRE",
    RPGOrc = "rpg_ORC",
    RPGRat = "rpg_RAT",
    RPGSkeletonKnight = "rpg_SKELETON_KNIGHT",
    RPGTreeEnt = "rpg_TREE_ENT",
    RPGTroll = "rpg_TROLL",
    RPGVampire = "rpg_VAMPIRE",
    RPGWerewolf = "rpg_WEREWOLF",
    RPGWolf = "rpg_WOLF",
    RPGWyvern = "rpg_WYVERN",
    ScriptingTrigger = "ScriptingTrigger",
    Tablet = "Tablet",
    Tile = "Custom_Tile",
    TilesetBarrel = "Tileset_Barrel",
    TilesetChair = "Tileset_Chair",
    TilesetChest = "Tileset_Chest",
    TilesetCorner = "Tileset_Corner",
    TilesetFloor = "Tileset_Floor",
    TilesetRock = "Tileset_Rock",
    TilesetTable = "Tileset_Table",
    TilesetTree = "Tileset_Tree",
    TilesetWall = "Tileset_Wall",
    Token = "Custom_Token",
}

declare const enum ObjectType {
    BackgammonPiece = "Backgammon Piece",
    Bag = "Bag",
    Block = "Block",
    Board = "Board",
    Calculator = "Calculator",
    Card = "Card",
    Checker = "Checker",
    Chess = "Chess",
    Chip = "Chip",
    Clock = "Clock",
    Coin = "Coin",
    Counter = "Counter",
    Deck = "Deck",
    Die = "Dice",
    Domino = "Domino",
    Figurine = "Figurine",
    Fog = "Fog",
    FogOfWar = "FogOfWar",
    Generic = "Generic",
    GoPiece = "GoPiece",
    Hand = "Hand",
    Infinite = "Infinite",
    InventoryBackground = "InventoryBackground",
    InventoryBotBackground = "InventoryBotBG",
    InventoryItemBlank = "InventoryItemBlank",
    InventoryTopBackground = "InventoryTopBG",
    Jigsaw = "Jigsaw",
    JigsawBox = "Jigsaw Box",
    MP3 = "Mp3",
    Notecard = "Notecard",
    Pointer = "Pointer",
    Randomize = "Randomize",
    RPGFigurine = "rpgFigurine",
    Scripting = "Scripting",
    Stack = "Stack",
    Superfight = "Superfight",
    Surface = "Surface",
    Tablet = "Tablet",
    Text = "3D Text",
    Tile = "Tile",
    Tileset = "Tileset",
    VRUI = "VR UI",
}

/**
 * Type of material an object is made of.
 * Determines shader settings and sound of the object.
 */
declare const enum MaterialType {
    Plastic = 0,
    Wood = 1,
    Metal = 2,
    Cardboard = 3,
    Glass = 4,
}

/** @noSelf */
declare interface TTSObject
    extends TTSObjectMembers,
        TTSObjectGlobalFunctions,
        TTSObjectTransformFunctions,
        TTSObjectTagFunctions,
        TTSObjectClassicUiFunctions,
        TTSObjectGetFunctions,
        TTSObjectSetFunctions,
        TTSObjectActionFunctions,
        TTSObjectHideFunctions,
        Omit<GameObject, "name"> {}

interface TTSObjectGlobalFunctions {
    /** The attached XML UI of the object. */
    readonly UI: UI;

    /**
     * Add a Decal onto an object or the game world.
     *
     * @remarks
     * Relative Vectors
     *
     * When using this function, the vector parameters (position, rotation) are relative to what the decal is being placed
     * on. For example, if you put a decal at {0,0,0} on Global, it will attach to the center of the game room. If you do
     * the same to an object, it will place the decal on the origin point of the object.
     *
     * @param parameters A Table of parameters used to determine how the function will act.
     *
     * @example
     *
     * ```lua
     * function onLoad()
     *     local params = {
     *         name     = "API Icon",
     *         url      = "https://api.tabletopsimulator.com/img/TSIcon.png",
     *         position = {0, 5, 0},
     *         rotation = {90, 0, 0},
     *         scale    = {1, 1, 1},
     *     }
     *     Global.addDecal(params)
     * end
     * ```
     */
    addDecal(parameters: Decal): boolean;

    /**
     * Used to call a Lua function on another entity.
     *
     * Var is only returned if the function called has a return. Otherwise return is nil. See example.
     *
     * @param funcName Function name you want to activate.
     * @param funcParams A Table containing any data you want to pass to that function. Optional, will not be sent by
     *                   default.
     *
     * @example Call, used from an entity's script
     *
     * ```lua
     * params = {
     *     msg   = "Hello world!",
     *     color = {r=0.2, g=1, b=0.2},
     * }
     * -- Success would be set to true by the return value in the function
     * success = Global.call("testFunc", params)
     *
     * -- Function in Global
     * function testFunc(params)
     *     broadcastToAll(params.msg, params.color)
     *     return true
     * end
     * ```lua
     */
    call(funcName: string, funcParams?: unknown): unknown;

    /**
     * Returns a table of sub-tables, each sub-table representing one decal.
     *
     * @example Example returned table:
     *
     * ```lua
     * -- If this object had 2 of the same decal on it
     * decalTable = self.getDecals()
     *
     * --[[ This is what the table would look like
     * {
     *     {
     *         name     = "API Icon",
     *         url      = "https://api.tabletopsimulator.com/img/TSIcon.png",
     *         position = {0, 5, 0},
     *         rotation = {90, 0, 0},
     *         scale    = {5, 5, 5}
     *     },
     *     {
     *         name     = "API Icon",
     *         url      = "https://api.tabletopsimulator.com/img/TSIcon.png",
     *         position = {0, 5, 0},
     *         rotation = {90, 0, 0},
     *         scale    = {5, 5, 5}
     *     },
     * }
     * ]]--
     *
     * -- Accessing the name of of the second entry would look like this
     * print(decalTable[2].name)
     * ```
     */
    getDecals(): Decal[];

    /**
     * Get a Lua script as a string from the entity.
     */
    getLuaScript(): string;

    /**
     * Returns a table representing a list of snap points.
     *
     * @remarks
     * Tip
     *
     * This function may be called on Global in order to return a list of global snap points (i.e. snap points on the
     * table).
     *
     * @returns The returned value is a list (numerically indexed table) of sub-tables, where each sub-table represents
     *          a snap point and has the following properties:
     *
     * @example Log the list of global snap points:
     *
     * ```lua
     * log(Global.getSnapPoints())
     * ```
     */
    getSnapPoints(): SnapPoint[];

    /**
     * Data value of a variable in another Object's script. Can only return a table.
     *
     * @param tableName
     */
    getTable(tableName: string): unknown;

    /**
     * Data value of a variable in another entity's script. Cannot return a table.
     *
     * @param varName
     */
    getVar(varName: string): unknown;

    /**
     * Returns Table of data representing the current Vector Lines on this entity. See setVectorLines for table format.
     */
    getVectorLines(): VectorLine[];

    /**
     * Sets which decals are on an object. This removes other decals already present, and can remove all decals as well.
     *
     * @remarks
     * Removing decals
     *
     * Using this function with an empty table will remove all decals from Global or the object it is used on.
     * Global.setDecals({})
     *
     * @param parameters The main table, which will contain all of the sub-tables.
     *
     * @example
     *
     * ```lua
     * function onLoad()
     *     local parameters = {
     *         {
     *             name     = "API Icon",
     *             url      = "https://api.tabletopsimulator.com/img/TSIcon.png",
     *             position = {-2, 5, 0},
     *             rotation = {90, 0, 0},
     *             scale    = 5,
     *         },
     *         {
     *             name     = "API Icon",
     *             url      = "https://api.tabletopsimulator.com/img/TSIcon.png",
     *             position = {2, 5, 0},
     *             rotation = {90, 0, 0},
     *             scale    = 5,
     *         },
     *     }
     *
     *     Global.setDecals(parameters)
     * end
     * ```
     */
    setDecals(parameters: Decal[]): boolean;

    /**
     * Input a string as an entity's Lua script. Generally only used after spawning a new Object.
     *
     * @param script
     */
    setLuaScript(script: string): boolean;

    /**
     * Replaces existing snap points with the specified list of snap points.
     *
     * @remarks
     * Tip
     *
     * This function can also be called on Global in order to create snap points directly within the scene, which are not
     * attached to any other Object.
     *
     * @param snapPoints A list (numerically indexed table) of snap points.
     *
     * @example
     *
     * Give an object 3 snap points. A regular snap point, a rotation snap point, and a rotation snap point with a tag.
     *
     * ```lua
     * object.setSnapPoints({
     *     {
     *         position = {5, 2, 5}
     *     },
     *     {
     *         position = {5, 2, 5},
     *         rotation = {0, 180, 0},
     *         rotation_snap = true
     *     },
     *     {
     *         position = {-3, 2, 0},
     *         rotation = {0, 45, 0},
     *         rotation_snap = true,
     *         tags = {"meeple"}
     *     }
     * })
     * ```
     */
    setSnapPoints(snapPoints: Partial<SnapPoint>[]): boolean;

    /**
     * Creates/updates a global table variable in another entity's script.
     *
     * @param tableName The name of the table.
     * @param tableValue The new table data.
     */
    setTable(tableName: string, tableValue: unknown): boolean;

    /**
     * Creates/updates a global variable in another entity's script. Cannot set a table.
     *
     * @param varName The name of the variable.
     * @param varValue The new variable value.
     */
    setVar(varName: string, varValue: unknown): boolean;

    /**
     * Spawns Vector Lines from a list of parameters.
     *
     * > This function can also be used on the game world itself using Global.
     *
     * @param parameters: The table containing each "line's" data. Each contiguous line has its own sub-table.
     *
     * @example
     *
     * ```lua
     * function onLoad()
     *     --Make an X above the middle of the table
     *     Global.setVectorLines({
     *         {
     *             points    = { {5,1,5}, {-5,1,-5} },
     *             color     = {1,1,1},
     *             thickness = 0.5,
     *             rotation  = {0,0,0},
     *         },
     *         {
     *             points    = { {-5,1,5}, {5,1,-5} },
     *             color     = {0,0,0},
     *             thickness = 0.5,
     *             rotation  = {0,0,0},
     *         },
     *     })
     * end
     * ```
     */
    setVectorLines(parameters: Optional<VectorLine, "color" | "thickness" | "rotation">[]): boolean;
}

interface TTSObjectMembers {
    /** When non-zero, the Alt view will use the specified Euler angle to look at the object. */
    alt_view_angle: Vector;

    /** Angular drag. Unity rigidbody property. */
    angular_drag: float;

    /** If the object should be lifted above other objects to avoid collision when held by a player. */
    auto_raise: boolean;

    /** Bounciness, value of 0-1. Unity physics material. */
    bounciness: float;

    /** Drag. Unity rigidbody property. */
    drag: float;

    /**
     * When false, the object will not be selected by regular (click and drag) selection boxes that are drawn around the
     * object. Players may proceed to override this behavior by holding the "Shift" modifier whilst drag selecting.
     */
    drag_selectable: boolean;

    /** Dynamic friction, value of 0-1. Unity physics material. */
    dynamic_friction: float;

    /** If grid lines can appear on the Object if visible grids are turned on. */
    grid_projection: boolean;

    /**
     * The 6 character unique Object identifier within Tabletop Simulator. It is assigned correctly once the spawning
     * member variable becomes false.
     */
    guid: GUID;

    /** The Color of the Player that is holding the object. */
    held_by_color: Maybe<PlayerColor>;

    /** 0-23 value. Changes when a Player hits flip or alt + rotate. */
    held_flip_index: int;

    /** Position offset from pointer. */
    held_position_offset: Vector;

    /**
     * When the Object collides with something while moving this is automatically enabled and reduces the movement force.
     */
    held_reduce_force: boolean;

    /** Rotation offset from pointer. */
    held_rotation_offset: Vector;

    /** 0-23 value. Changes when a Player rotates the Object. */
    held_spin_index: int;

    /**
     * Hide the Object when face-down as if it were in a hand zone. The face is the "top" of the Object, the direction of
     * its positive Y coordinate. Cards/decks default to true.
     */
    hide_when_face_down: boolean;

    /** Makes the object not be hidden by Fog of War. */
    ignore_fog_of_war: boolean;

    /** If the object can be interacted with by Players. Other object will still be able to interact with it. */
    interactable: boolean;

    /**
     * If the Object is roughly face-down (like with cards). The face is the "top" of the Object, the direction of its
     * positive Y coordinate.
     */
    readonly is_face_down: boolean;

    /** If the Object's custom elements (images/models/etc) are loading. */
    readonly loading_custom: boolean;

    /** If the object is frozen in place (preventing physics interactions). */
    locked: boolean;

    /** Mass. Unity rigidbody property. */
    mass: float;

    /**
     * Determines the maximum number of digits which a user may type whilst hovering over the object. As soon as a player
     * types the maximum number of digits, the corresponding behavior (e.g. onObjectNumberTyped/onNumberTyped) is
     * triggered immediately, improving responsiveness.
     */
    max_typed_number: int;

    /** Measure Tool will automatically be used when moving the Object. */
    measure_movement: boolean;

    /**
     * A string where you may persist user-data associated with the object. Tabletop Simulator saves this field, but
     * otherwise does not use it. Store whatever information you see fit.
     */
    memo: string;

    /** Internal resource name for this Object. Only useful for spawnObjectData(). Generally, you want getName(). */
    readonly name: string;

    /** The position the Object was picked up at. */
    readonly pick_up_position: Vector;

    /** The rotation the Object was picked up at. */
    readonly pick_up_rotation: Vector;

    /**
     * If this object is a container that cannot exist with less than two contained objects (e.g. a deck), taking out the
     * second last contained object will result in the container being destroyed. In its place the last remaining object
     * in the container will be spawned. This variable provides a reference to the remaining object when it is being
     * spawned. Otherwise, it's nil.
     */
    readonly remainder: Maybe<TTSObject>;

    /** If the Object is at rest. Unity rigidbody property. */
    resting: boolean;

    /** The Lua Script on the Object. */
    script_code: string;

    /** The saved data on the object. See onSave(). */
    script_state: string;

    /** If the Object is finished spawning. */
    readonly spawning: boolean;

    /** Static friction, value of 0-1. Unity physics material. */
    static_friction: float;

    /** If other Objects on top of this one are also picked up when this Object is. */
    sticky: boolean;

    /** If the tooltip opens when a pointer hovers over the object. Tooltips display name and description. */
    tooltip: string;

    /** This object's type. */
    readonly type: string;

    /** If gravity affects this object. */
    use_gravity: boolean;

    /** If snapping to grid is enabled or not. */
    use_grid: boolean;

    /** If this object can be held in a hand zone. */
    use_hands: boolean;

    /** Switches the axis the Object rotates around when flipped. */
    use_rotation_value_flip: boolean;

    /** If snap points are used or ignored. */
    use_snap_points: boolean;

    /**
     * A numeric value associated with the object, which when non-zero, will be displayed when hovering over the object.
     * In the case of stacks, the value shown in the UI will be multiplied by the stack size i.e. you can use value to
     * create custom stackable chips. When multiple objects are selected, values will be summed together with objects
     * sharing overlapping object tags.
     */
    value: int;
}

interface TTSObjectTransformFunctions {
    /**
     * Adds force to an object in a directional Vector.
     *
     * @param vector A Vector of the direction and magnitude of force.
     * @param forceType An Int representing the force type to apply. Options below.
     * Optional, defaults to 3.
     * 1. Continuous force, uses mass. (Force)
     * 2. Continuous acceleration, ignores mass. (Acceleration)
     * 3. Instant force impulse, uses mass. (Impulse)
     * 4. Instant velocity change, ignores mass. (Velocity Change)
     */
    // TODO force type enum
    addForce(vector: VectorShape, forceType?: int): boolean;

    /**
     * Adds torque to an object in a rotational Vector.
     *
     * @param vector A Vector of the direction and magnitude of rotational force.
     * @param forceType An Int representing the force type to apply. Options below.
     * Optional, defaults to 3.
     * 1. Continuous force, uses mass. (Force)
     * 2. Continuous acceleration, ignores mass. (Acceleration)
     * 3. Instant force impulse, uses mass. (Impulse)
     * 4. Instant velocity change, ignores mass. (Velocity Change)
     */
    addTorque(vector: VectorShape, forceType?: int): boolean;

    /**
     * Returns a Vector of the current angular velocity.
     */
    getAngularVelocity(): Vector;

    /**
     * Returns a Table of Vector information describing the size of an object in Global terms. Bounds are part of Unity, and represent an imaginary square box that can be drawn around an object. Unlike scale, it can help indicate the size of an object in in-game units, not just relative model size.
     *
     * Return Table
     * - center: The Vector of the center of the bounding box.
     * - size: The Vector of the size of the bounding box.
     * - offset: The Vector of the offset of the center of the bounding box from the middle of the Object model.
     */
    getBounds(): Bounds;

    /**
     * Returns a Table of Vector information describing the size of an object in Global terms, as if it was rotated to {0,0,0}. Bounds are part of Unity, and represent an imaginary square box that can be drawn around an object. Unlike scale, it can help indicate the size of an object in in-game units, not just relative model size.
     *
     * Return Table
     * - center: The Vector of the center of the bounding box.
     * - size: The Vector of the size of the bounding box.
     * - offset: The Vector of the offset of the center of the bounding box from the middle of the Object model.
     */
    getBoundsNormalized(): Bounds;

    /**
     * Returns a Vector of the current World Position.
     */
    getPosition(): Vector;

    /**
     * Returns a Vector of the current smooth move target if the object is smooth moving, otherwise returns nil.
     */
    getPositionSmooth(): Maybe<Vector>;

    /**
     * Returns a Vector of the current rotation.
     */
    getRotation(): Vector;

    /**
     * Returns a Vector of the current smooth rotation target if the object is smooth moving, otherwise returns nil.
     */
    getRotationSmooth(): Maybe<Vector>;

    /**
     * Returns a Vector of the current scale. Scale is not an absolute measurement, it is a multiple of the Object's default model size. So {x=2, y=2, z=2} would be a model twice its default size, not 2 units large.
     */
    getScale(): Vector;

    /**
     * Returns a Vector of the forward direction of this Object. The direction is relative to how the object is facing.
     *
     * @example Example of moving forward 5 units
     * ```lua
     * function onLoad()
     *     distance = 5
     *     pos_target = self.getTransformForward()
     *     pos_current = self.getPosition()
     *     pos = {
     *         x = pos_current.x + pos_target.x * distance,
     *         y = pos_current.y + pos_target.y * distance,
     *         z = pos_current.z + pos_target.z * distance,
     *     }
     *     self.setPositionSmooth(pos)
     * end
     * ```
     */
    getTransformForward(): Vector;

    /**
     * Returns a Vector of the forward direction of this object. The direction is relative to how the object is facing.
     *
     * @example Example of moving right 5 units
     * ```lua
     * function onLoad()
     *     distance = 5
     *     pos_target = self.getTransformRight()
     *     pos_current = self.getPosition()
     *     pos = {
     *         x = pos_current.x + pos_target.x * distance,
     *         y = pos_current.y + pos_target.y * distance,
     *         z = pos_current.z + pos_target.z * distance,
     *     }
     *     self.setPositionSmooth(pos)
     * end
     * ```
     */
    getTransformRight(): Vector;

    /**
     * Returns a Vector of the up direction of this Object. The direction is relative to how the object is facing.
     *
     * @example Example of moving up 5 units
     * ```lua
     * function onLoad()
     *     distance = 5
     *     pos_target = self.getTransformUp()
     *     pos_current = self.getPosition()
     *     pos = {
     *         x = pos_current.x + pos_target.x * distance,
     *         y = pos_current.y + pos_target.y * distance,
     *         z = pos_current.z + pos_target.z * distance,
     *     }
     *     self.setPositionSmooth(pos)
     * end
     * ```
     */
    getTransformUp(): Vector;

    /**
     * Returns a Vector of the current velocity.
     */
    getVelocity(): Vector;

    /**
     * Indicates if an object is traveling as part of a Smooth move. Smooth moving is performed by setPositionSmooth and
     * setRotationSmooth.
     */
    isSmoothMoving(): boolean;

    /**
     * Returns a Vector after converting a world vector to a local Vector. A world Vector is a positional Vector using
     * the world's coordinate system. A Local Vector is a positional Vector that is relative to the position of the given
     * object.
     *
     * @remarks
     * Object Scale
     *
     * This function takes the Object's scale into account, as the Object is the key relative point.
     *
     * @param vector The world position to convert into a local position.
     */
    positionToLocal(vector: VectorShape): Vector;

    /**
     * Returns a Vector after converting a local Vector to a world Vector. A world Vector is a positional Vector using
     * the world's coordinate system. A Local Vector is a positional Vector that is relative to the position of the given
     * object.
     *
     * @remarks
     * Object Scale
     *
     * This function takes the Object's scale into account, as the Object is the key relative point.
     *
     * @param vector The local position to convert into a world position.
     */
    positionToWorld(vector: VectorShape): Vector;

    /**
     * Rotates Object smoothly in the direction of the given Vector. This does not set the Object to face a specific
     * rotation, it rotates the Object around by the number of degrees given for x/y/z.
     *
     * @param vector The amount of x/y/z to rotate by.
     *
     * @example Rotates object 90 degrees around its Y axis
     * ```lua
     * self.rotate({x=0, y=90, z=0})
     * ```
     */
    rotate(vector: Vector): boolean;

    /**
     * Scales Object by a multiple. This does not set the Object to a specific scale, it scales the Object by the given
     * multiple.
     *
     * @param vector Multiplier for scale. `{x=1, y=1, z=1}` or 1 would not change the scale.
     * @example Both examples work to scale an object to be twice its current scale
     * ```lua
     * self.scale({x=2, y=2, z=2})
     * self.scale(2)
     * ```
     */
    scale(vector: VectorShape | float): boolean;

    /**
     * Sets a Vector as the current angular velocity.
     *
     * @param vector
     */
    setAngularVelocity(vector: VectorShape): boolean;

    /**
     * Instantly moves an Object to the given Vector. The Vector is interpreted as World Position.
     *
     * @param vector The new position
     */
    setPosition(vector: Vector): boolean;

    /**
     * Moves the Object smoothly to the given Vector.
     *
     * @param vector A positional Vector.
     * @param collide If the Object will collide with other Objects while moving.
     * @param fast If the Object is moved quickly.
     */
    setPositionSmooth(vector: VectorShape, collide?: boolean, fast?: boolean): boolean;

    /**
     * Instantly rotates an Object to the given Vector.
     *
     * @param vector The new rotation
     */
    setRotation(vector: Vector): boolean;

    /**
     * Rotates the Object smoothly to the given Vector.
     *
     * @param vector A rotational Vector.
     * @param collide If the Object will collide with other Objects while rotating.
     * @param fast If the Object is rotated quickly.
     */
    setRotationSmooth(vector: VectorShape, collide?: boolean, fast?: boolean): boolean;

    /**
     * Sets a Vector as the current scale.
     *
     * @param vector The new scale.
     */
    setScale(vector: VectorShape): boolean;

    /**
     * Sets a Vector as the current velocity.
     *
     * @param vector
     */
    setVelocity(vector: VectorShape): boolean;

    /**
     * Smoothly moves Object by the given Vector offset.
     *
     * @param vector
     */
    translate(vector: VectorShape): boolean;
}

interface TTSObjectTagFunctions {
    /**
     * Adds the specified tag to the object.
     *
     * @param tag The tag
     */
    addTag(tag: string): boolean;

    /**
     * Returns a table of tags that have been added to the object.
     */
    getTags(): string[];

    /**
     * Returns whether the object has any tags.
     */
    hasAnyTag(): boolean;

    /**
     * Returns whether the object and the specified other object share at least one tag in common.
     *
     * @param other The other object.
     */
    hasMatchingTag(other: TTSObject): boolean;

    /**
     * Returns whether the object has the specified tag.
     *
     * @param tag The tag.
     */
    hasTag(tag: string): boolean;

    /**
     * Removes the specified tag from the object.
     *
     * @param tag The tag.
     */
    removeTag(tag: string): boolean;

    /**
     * Replaces all tags on the object with those contained in the specified table.
     *
     * @param tags The new tags.
     */
    setTags(tags: string[]): boolean;
}

interface TTSObjectClassicUiFunctions {
    /**
     * Removes all scripted buttons
     */
    clearButtons(): boolean;

    /**
     * Removes all scripted inputs.
     */
    clearInputs(): boolean;

    /**
     * Creates a scripted button attached to the Object. Scripted buttons are buttons that can be clicked while in-game
     * that trigger a function in a script.
     */
    // TODO more docs
    createButton(params: CreateButton): boolean;

    /**
     * Creates a scripted input attached to the Object. Scripted inputs are boxes you can click inside of in-game to
     * input/edit text. Every letter typed triggers the function. The bool that is returned as part of the input_function
     * allows you to determine when a player has finished editing the input.
     */
    // TODO more docs
    createInput(params: CreateInput): boolean;

    /**
     * Modify an existing button. The only parameter that is required is the index. The rest are optional, and not using
     * them will cause the edited button's element to remain. Indexes start at 0. The first button on any given Object has
     * an index of 0, the next button on it has an index of 1, etc. Each Object has its own indexes.
     */
    // TODO more docs
    editButton(params: EditButton): boolean;

    /**
     * Modify an existing input. The only parameter that is required is the index. The rest are optional, and not using
     * them will cause the edited input's element to remain. Indexes start at 0. The first input on any given Object has
     * an index of 0, the next input on it has an index of 1, etc. Each Object has its own indexes.
     */
    editInput(params: EditInput): boolean;

    /**
     * Returns a Table of all buttons on this Object. The Table contains parameters tables with the same keys as seen in
     * the createButton section, except each Table of parameters also contains an index entry. This is used to identify
     * each button, used by editButton and removeButton.
     */
    getButtons(): Maybe<Button[]>;

    /**
     * Returns a Table of all inputs on this Object. The Table contains parameters tables with the same keys as seen in
     * the createInput section, except each Table of parameters also contains an index entry. This is used to identify
     * each input, used by editInput and removeInput.
     */
    getInputs(): Maybe<Input[]>;

    /**
     * Removes a specific button. Indexes start at 0. The first button on any given Object has an index of 0, the next
     * button on it has an index of 1, etc. Each Object has its own indexes.
     *
     * Removing an index instantly causes all other higher indexes to shift down 1.
     *
     * @param index Button index to remove.
     */
    removeButton(index: int): boolean;

    /**
     * Removes a specific input. Indexes start at 0. The first input on any given Object has an index of 0, the next input
     * on it has an index of 1, etc. Each Object has its own indexes.
     *
     * Removing an index instantly causes all other higher indexes to shift down 1.
     *
     * @param index Input index to remove.
     */
    removeInput(index: int): boolean;
}

interface TTSObjectGetFunctions {
    /**
     * Returns a table in the same format as getObjects() for containers.
     */
    getAttachments(): ContainedObjectInfo[];

    /**
     * Color tint.
     */
    getColorTint(): Color;

    /**
     * Returns a Table with the Custom Object information of a Custom Object. See the Custom Game Objects page for the
     * kind of information returned.
     */
    // TODO more docs
    getCustomObject(): any; // TODO

    /**
     * Returns a table data structure representation of the object. Works with spawnObjectData(...).
     */
    getData(): any; // TODO

    /**
     * Description, also shows as part of Object's tooltip.
     */
    getDescription(): string;

    /**
     * Settings impacting Fog of War being revealed. In the example returned table, these are the default values of any
     * object.
     *
     * @remarks
     * Color Selection
     *
     * "Black" and "All" are synonymous for Fog of War. Either means that all players can see the revealed area when
     * reveal = true.
     *
     * @example Example returned Table for a custom token
     * ```lua
     * {
     *   reveal = false,
     *   color = 'All',
     *   range = 5
     * }
     * ```
     */
    getFogOfWarReveal(): FogOfWarSettings;

    /**
     * Game Master Notes only visible for Player Color "Black".
     */
    getGMNotes(): string;

    /**
     * String of the Object's unique identifier.
     */
    getGUID(): GUID;

    /**
     * Returns a JSON string representation of the object. Works with spawnObjectJSON(...).
     *
     * @param indented indented is optional and defaults to true.
     */
    getJSON(indented?: boolean): string;

    /**
     * Returns information on any joints attached to this object. This information included the GUID of the other objects
     * attached via the joints.
     *
     * This function returns a table of sub-tables, each sub-table representing one joint.
     *
     * @example Example of a return table of an object with 2 joints
     *
     * ```lua
     * {
     *     {
     *         type              = "Spring",
     *         joint_object_guid = "555555",
     *         collision         = false,
     *         break_force       = 1000,
     *         break_torgue      = 1000,
     *         axis              = {0,0,0},
     *         anchor            = {0,0,0},
     *         connector_anchor  = {0,0,0},
     *         motor_force       = 0,
     *         motor_velocity    = 0,
     *         motor_free_spin   = false,
     *         spring            = 50,
     *         damper            = 0.1
     *         max_distance      = 10
     *         min_distance      = 0
     *     },
     *     {
     *         type              = "Spring",
     *         joint_object_guid = "888888",
     *         collision         = false,
     *         break_force       = 1000,
     *         break_torgue      = 1000,
     *         axis              = {0,0,0},
     *         anchor            = {0,0,0},
     *         connector_anchor  = {0,0,0},
     *         motor_force       = 0,
     *         motor_velocity    = 0,
     *         motor_free_spin   = false,
     *         spring            = 50,
     *         damper            = 0.1
     *         max_distance      = 10
     *         min_distance      = 0
     *     },
     * }
     * ```
     *
     * @example Example of printing the first sub-table's information:
     *
     * ```lua
     * local jointsInfo = self.getJoints()
     * for k, v in pairs(jointsInfo[1]) do
     *     print(k, ":  ", v)
     * end
     * ```
     */
    getJoints(): Joint[];

    /**
     * If the Object is locked.
     */
    getLock(): boolean;

    /**
     * Name, also shows as part of Object's tooltip.
     */
    getName(): string;

    /**
     * Returns data describing the objects contained within in the zone/bag/deck.
     *
     * The format of the data returned depends on the kind of object.
     *
     * @remarks
     * Containers (Bags/Decks)
     *
     * Containers return a (numerically indexed) table consisting of sub-tables
     *
     * Zones
     *
     * Zones return a (numerically indexed) table of game Objects occupying the zone.
     *
     * If the zone has tags, then only objects with compatible tags will occupy the zone.
     *
     * @example Iterate through each contained object
     *
     * ```lua
     * for _, containedObject in ipairs(object.getObjects()) do
     *     if containedObject.name == "Super Card" then
     *         object.takeObject({
     *             index = containedObject.index
     *         })
     *         break -- Stop iterating
     *     end
     * end
     * ```lua
     *
     * @example Iterate through object occupying the zone
     *
     * ```lua
     * for _, occupyingObject in ipairs(object.getObjects()) do
     *     if occupyingObject.type == "Card" then
     *         occupyingObject.highlightOn('Red')
     *     end
     * end
     * ```
     */
    getObjects(): ContainedObjectInfo[] | TTSObject[];

    /**
     * Returns the number of objects contained within (if the Object is a bag, deck or stack), otherwise -1.
     */
    getQuantity(): int;

    /**
     * Returns the current rotationValue. Rotation values are used to give value to different rotations (like dice) and
     * are set using scripting or the Gizmo tool. The value returned is for the rotation that is closest to being pointed
     * "up".
     *
     * The returned value will either be a number or a string, depending on the value that was given to that rotation.
     *
     * @example
     *
     * ```lua
     * local value = self.getRotationValue()
     * print(value)
     * ```
     */
    getRotationValue(): string | int;

    /**
     * Returns a Table of rotation values. Rotation values are used to give value to different rotations (like dice)
     * based on which side is pointed "up". It works by checking all of the rotation values assigned to an object and
     * determining which one of them is closest to pointing up, and then displaying the value associated with that
     * rotation.
     *
     * You can manually assign rotation values to objects using the Rotation Value Gizmo tool (in the left side Gizmo
     * menu) or using setRotationValues(...).
     *
     * @example Example returned Table for a coin
     *
     * ```lua
     * {
     *     {value="Heads", rotation={x=0, y=0, z=0}},
     *     {value="Tails", rotation={x=180, y=0, z=0}},
     * }
     * ```
     */
    getRotationValues(): { value: string | int; rotation: Vector }[];

    /**
     * Returns a table of the player colors currently selecting the object.
     */
    getSelectingPlayers(): PlayerColor[];

    /**
     * Current state ID (index) an object is in. Returns -1 if there are no other states. State ids (indexes) start at 1.
     */
    getStateId(): int;

    /**
     * Returns a Table of information on the states of an Object. Stated Objects have ids (indexes) starting with 1.
     *
     * The returned table will NOT include data on the current state.
     *
     * @example Example returned Table
     *
     * ```lua
     * {
     *     {
     *         name             = "First State",
     *         description      = "",
     *         guid             = "AAA111",
     *         id               = 1,
     *         lua_script       = "",
     *         lua_script_state = "",
     *     },
     *     {
     *         name             = "Second State",
     *         description      = "",
     *         guid             = "BBB222",
     *         id               = 2,
     *         lua_script       = "",
     *         lua_script_state = "",
     *     },
     * }
     * ```
     */
    getStates(): StateInfo[];

    /**
     * Returns the Object's value. This represents something different depending on the Object's type.
     *
     * @remarks
     * Important
     *
     * If the Object has rotation values, then this method will return the rotation value i.e. behave the same as
     * getRotationValue().
     *
     * See setValue(...) for more information.
     */
    getValue(): string | int | float;

    /**
     * Returns a list of zones that the object is currently occupying.
     *
     * @remarks
     * Important
     *
     * If the object has tags, then the object will only occupy zones with compatible tags.
     *
     * @example Print a comma separated list of GUIDs belonging to zones an object is currently occupying.
     *
     * ```lua
     * local guids = {}
     *
     * for _, zone in ipairs(object.getZones()) do
     *     table.insert(guids, zone.guid)
     * end
     *
     * if #guids > 0 then
     *     print("Object is contained within " .. table.concat(guids, ", "))
     * else
     *     print("Object is not contained within any zones")
     * end
     * ```
     */
    getZones(): TTSObject[];

    /**
     * Returns true if the Object is (or will be) destroyed.
     */
    isDestroyed(): boolean;
}

interface TTSObjectSetFunctions {
    /**
     * Sets the Color tint.
     *
     * @param color The color tint
     */
    setColorTint(color: ColorValue): boolean;

    /**
     * Sets a custom Object's properties. It can be used after spawnObject or on an already existing custom Object. If
     * used on an already existing custom Object, you must use reload on the object after setCustomObject for the changes
     * to be displayed.
     *
     * @param parameters The custom object information.
     *
     * @example Example of a custom token
     *
     * ```lua
     * params = {
     *     image = "SOME URL HERE",
     *     thickness = 0.2,
     *     merge_distance = 15,
     *     stackable = false,
     * }
     * obj.setCustomObject(params)
     * obj.reload()
     * ```lua
     */
    setCustomObject(parameters: CustomObject): boolean;

    /**
     * Sets a description for an Object. Shows in tooltip after delay.
     *
     * @param description The description.
     */
    setDescription(description: string): boolean;

    /**
     * Establish the settings and enable/disable an Object's revealing of Fog of War.
     *
     * @param settings A Table containing information on if/how this Object should reveal Fog of War.
     *
     * @example Example of enabling reveal for all players at 3 units of radius.
     *
     * ```lua
     * params = {
     *     reveal = true,
     *     color  = "Black",
     *     range  = 3,
     * }
     * self.setFogOfWarReveal(params)
     * ```
     */
    setFogOfWarReveal(settings: FogOfWarSettings): boolean;

    /**
     * Sets Game Master Notes only visible for Player Color Black.
     *
     * @param notes The GM notes.
     */
    setGMNotes(notes: string): boolean;

    /**
     * Sets if an object is locked in place.
     *
     * @param lock
     */
    setLock(lock: boolean): boolean;

    /**
     * Sets a name for an Object. Shows in tooltip.
     *
     * @param name
     */
    setName(name: string): boolean;

    /**
     * Sets the Object's rotation value i.e. physically rotates the object.
     *
     * The Object will be elevated (smooth moved upward), smoothly rotated to the rotation corresponding with the
     * specified rotation_value and then released to fall back into place.
     *
     * @param rotationValue A rotation value. Should be a int, string or float.
     * @example Rotate a die to show the value 6.
     *
     * ```lua
     * die.setRotationValue(6)
     * ```
     */
    setRotationValue(rotationValue: int | string | float): unknown;

    /**
     * Sets rotation values of an object. Rotation values are used to give value to different rotations (like dice). It
     * works by checking all of the rotation values assigned to an object and determining which one of them is closest
     * to pointing up, and then displaying the value associated with that rotation.
     *
     * @param rotationValues A Table containing Tables with the following values. 1 sub-Table per "face".
     *
     * @example Set the two different sides (rotations) of a coin to have the values "Heads" and "Tails".
     *
     * ```lua
     * self.setRotationValues({
     *     {
     *         value="Heads",
     *         rotation={x=0, y=0, z=0}
     *     },
     *     {
     *         value="Tails",
     *         rotation={x=180, y=0, z=0}
     *     },
     * })
     * ```
     */
    setRotationValues(rotationValues: { value: int | string | float; rotation: Vector }[]): boolean;

    /**
     * Sets state of an Object. State ids (indexes) start at 1.
     * Will throw an error, if the current state is already the given index.
     *
     * @param stateId The new state.
     */
    setState(stateId: int): TTSObject;

    /**
     * Sets the Object's value. This represents something different depending on the Object's type.
     *
     * @param value
     */
    setValue(value: unknown): boolean;
}

interface TTSObjectActionFunctions {
    /**
     * The Object supplied as param is destroyed and becomes a dummy Object child.
     *
     * @param object The attached object
     */
    addAttachment(object: TTSObject): boolean;

    /**
     * Adds object to player's selection.
     *
     * @param playerColor
     */
    addToPlayerSelection(playerColor: PlayerColor): boolean;

    /**
     * Adds a menu item to the objects right-click context menu.
     *
     * @param label Label for the menu item.
     * @param toRunFunc Execute if menu item is selected.
     * @param keepOpen Keep context menu open after menu item was selected. Optional, Default: keep_open = false. Close
     *                 context menu after selection.
     *
     * @example
     *
     * ```lua
     * function onLoad()
     *     self.addContextMenuItem("doStuff", itemAction)
     * end
     *
     * function itemAction(player_color)
     *     print(player_color)
     * end
     * ```
     */
    addContextMenuItem(label: string, toRunFunc: ContextMenuHandler, keepOpen?: boolean): boolean;

    /**
     * Clears all menu items added by function addContextMenuItem.
     */
    clearContextMenu(): boolean;

    /**
     * Copy/Paste this Object.
     *
     * @param parameters A Table with information used when pasting.
     */
    clone(parameters?: { position?: Vector; snap_to_grid?: boolean }): TTSObject;

    /**
     * Cuts (splits) a deck down to a given card. In other words, it counts down from the top of the deck and makes a
     * new deck of that size and puts the remaining cards in the other pile.
     *
     * After the cut, the resulting decks much each have at least 2 cards. This means the parameter used must be between
     * 2 and totalNumberOfCards - 2.
     *
     * @remarks
     * Important
     *
     * New decks take a frame to be created. This means trying to act on them immediately will not work. Use a coroutine
     * or timer to add a delay.
     *
     * @param count How many cards down to cut the deck. Optional, if no value is provided the deck is cut in half.
     * @returns The table that is returned
     *  1. The lower deck, containing the remaining cards in the deck.
     *  2. The upper deck, containing count number of cards.
     *
     * @example
     *
     * ```lua
     * newDecks = deck.cut(5)
     * --A delay would be required here for these next two lines to work.
     * --The decks haven't been fully created yet.
     * newDecks[1].deal(1)
     * newDecks[2].deal(1)
     * ```lua
     */
    cut(count: int): [TTSObject, TTSObject];

    /**
     * Deals Objects to hand zones. Will deal from decks/bags/stacks as well as individual items. If dealing an
     * individual item to a hand zone, it is a good idea to make sure that its Member Variable for use_hands is true.
     *
     * @param number How many to deal.
     * @param playerColor The Player Color to deal to. Optional, defaults to an empty string. If not supplied, it will
     *                    attempt to deal to all seated players.
     * @param index Index of hand zone to deal to. Optional, defaults to the first created hand zone.
     */
    deal(number: int, playerColor?: PlayerColor, index?: int): boolean;

    /**
     * Deals from a deck to a position relative to the hand zone.
     *
     * @param offset The x/y/z offset to deal to around the given hand zone.
     * @param flip If the card is flipped over when dealt.
     * @param playerColor Hand zone Player Color to offset dealing to.
     *
     * @example Example of dealing 2 cards in front of the White player, face up.
     *
     * ```lua
     * self.dealToColorWithOffset({-2,0,5}, true, "White")
     * self.dealToColorWithOffset({ 2,0,5}, true, "White")
     * ```
     */
    dealToColorWithOffset(offset: Vector, flip: boolean, playerColor: PlayerColor): TTSObject;

    /**
     * Destroys an attachment with the given index.
     *
     * @param index
     */
    destroyAttachment(index: int): boolean;

    /**
     * Destroys all attachments.
     */
    destroyAttachments(): boolean;

    /**
     * Destroys Object. Allows for self.destruct().
     */
    destruct(): boolean;

    /**
     * Forces an Object, if held by a player, to be dropped.
     */
    drop(): boolean;

    /**
     * Flips Object over.
     */
    flip(): boolean;

    /**
     * Creates a highlight around an Object. duration is optional and specified in seconds, when omitted the Object
     * remains highlighted.
     *
     * @param color
     * @param duration
     */
    highlightOn(color: ColorValue, duration: float): boolean;

    /**
     * Removes a highlight from around an Object.
     *
     * @param color
     */
    highlightOff(color: ColorValue): boolean;

    /**
     * Joints objects together, in the same way the Joint tool does.
     *
     * **Using obj.jointTo(), with no object or parameter used as arguments, will remove all joints from that Object.**
     *
     * @param object The Object that the selected object will be jointed to.
     * @param parameters A table of parameters. Which parameters depends on the joint type. See below for more. All
     *                   parameters have defaults, the same as the Joint Tool.
     * @example Example of Fixed
     *
     * ```lua
     * self.jointTo(obj, {
     *     ["type"]        = "Fixed",
     *     ["collision"]   = true,
     *     ["break_force"]  = 1000.0,
     *     ["break_torgue"] = 1000.0,
     * })
     * ```
     *
     * @example Example of Spring
     *
     * ```lua
     * self.jointTo(obj, {
     *     ["type"]        = "Spring",
     *     ["collision"]   = false,
     *     ["break_force"]  = 1000.0,
     *     ["break_torgue"] = 1000.0,
     *     ["spring"]      = 50,
     *     ["damper"]      = 0.1,
     *     ["max_distance"] = 10,
     *     ["min_distance"] = 1
     * })
     * ```
     *
     * @example Example of Hinge
     *
     * ```lua
     * self.jointTo(obj, {
     *     ["type"]        = "Hinge",
     *     ["collision"]   = true,
     *     ["axis"]        = {1,1,1},
     *     ["anchor"]      = {1,1,1},
     *     ["break_force"]  = 1000.0,
     *     ["break_torgue"] = 1000.0,
     *     ["motor_force"]  = 100.0,
     *     ["motor_velocity"] = 10.0,
     *     ["motor_free_spin"] = true
     * })
     * ```
     */
    jointTo(object: TTSObject, parameters: Omit<Joint, "joint_object_guid">): boolean;

    /**
     * Places an object into a container (chip stacks/bags/decks). If neither Object is a container, but they are able
     * to be combined (like with 2 cards), then they form a deck/stack.
     *
     * @param putObject An Object to place into the container.
     * @returns Returned Object
     *
     * The container is returned as the Object reference. Either this is the container/deck/stack the other Object was placed into, or the deck/stack that was formed by the putObject action.
     *
     * @remarks
     * Putting Cards into Decks
     *
     * When you call this putObject() to put a card into a deck, the card goes into the end of the deck which is closest to it in Y elevation. So, if both the card and the deck are resting on the table, the card will be put at the bottom of the deck. if the card is hovering above the deck, it will be put at the top."
     *
     * @example Example of a script on a bag that places Object into itself
     * ```lua
     * local obj = getObjectFromGUID("AAA111")
     * self.putObject(obj)
     * ```
     */
    putObject(putObject: TTSObject): TTSObject;

    /**
     * Shuffles deck/bag, rolls dice/coin, lifts other objects into the air. Same as pressing R by default. If the
     * optional parameter color is used, this function will trigger onObjectRandomized(), passing that player color.
     *
     * @param color
     */
    randomize(color: PlayerColor): boolean;

    /**
     * Registers this object for Global collision events, such as onObjectCollisionEnter. Always returns true.
     *
     * @param stay Whether we should register for onObjectCollisionStay. Stay events may negatively impact performance,
     *             only set this to true if absolutely necessary. Optional, defaults to `false`.
     */
    registerCollisions(stay?: boolean): boolean;

    /**
     * Removes a child with the given index. Use getAttachments() to find out the index property.
     *
     * @param index
     */
    removeAttachment(index: int): TTSObject;

    /**
     * Detaches the children of this Object. Returns a table of object references
     */
    removeAttachments(): TTSObject[];

    /**
     * Removes object from player's selection.
     *
     * @param playerColor
     */
    removeFromPlayerSelection(playerColor: PlayerColor): boolean;

    /**
     * Returns Object reference of itself after it respawns itself. This function causes the Object to be deleted and
     * respawned instantly to refresh it, so its old Object reference will no longer be valid.
     *
     * Most often this is used after using setCustomObject(...) to modify a custom object.
     */
    reload(): TTSObject;

    /**
     * Resets this Object. Resetting a Deck brings all the Cards back into it. Resetting a Bag clears its contents
     * (works for both Loot and Infinite Bags).
     */
    reset(): boolean;

    /**
     * Rolls dice/coins.
     */
    roll(): boolean;

    /**
     * Shuffles/shakes up contents of a deck or bag.
     */
    shuffle(): boolean;

    /**
     * Returns an Object reference to a new state after randomly selecting and changing to one.
     */
    shuffleStates(): TTSObject;

    /**
     * Splits a deck, as evenly as possible, into a number of piles.
     *
     * @remarks
     * Important
     *
     * New decks take a frame to be created. This means trying to act on them immediately will not work. Use a coroutine
     * or timer to add a delay.
     *
     * @param piles How many piles to split the deck into. Optional, if no value is provided, it is split into two piles.
     *              Minimum Value: 2 Maximum Value: Number-Of-Cards-In-Deck / 2
     * @returns The number of Objects in the table is equal to the number of decks created by the split. They are ordered
     *          so any larger decks come first.
     *
     * @example
     *
     * ```lua
     * newDecks = deck.split(4)
     * --A delay would be required here for these next four lines to work.
     * --The decks haven't been fully created yet.
     * newDecks[1].deal(1)
     * newDecks[2].deal(1)
     * newDecks[3].deal(1)
     * newDecks[4].deal(1)
     * ```
     */
    split(piles: int): TTSObject[];

    /**
     * Spreads the cards of a deck out on the table.
     *
     * @remarks
     * Important
     *
     * Cards take a frame to be created. This means trying to act on them immediately will not work. Use a coroutine or
     * timer to add a delay.
     *
     * @param distance How far apart should the cards be. Optional, if no value is provided, they will be 0.6 inches
     *                 apart. Negative values will spread to the left instead of the right.
     */
    spread(distance: float): TTSObject[];

    /**
     * Takes an object out of a container (bag/deck/chip stack), returning a reference to the object that was taken.
     *
     * Objects that are taken out of a container will take one or more frames to spawn. Certain interactions (e.g.
     * physics) will not be able to take place until the object has finished spawning.
     *
     * @param parameters A Table of parameters used to determine how takeObject will act.
     *
     * @remarks
     * Caution
     *
     * Certain containers only exist whilst they have more than one object contained within them (e.g. decks). Once you remove the second last object from a container, the container will be destroyed and the remaining contained object will spawn in its place. After calling takeObject(...) you can check for a remainder.
     *
     * @xample
     *
     * Take an object out of a container. As we take it out we'll instruct the object to smooth move (default
     * positioning behavior) to coordinates (0, 5, 0). Additionally, we're going to add a blue highlight on the object
     * we've taken out.
     *
     * ```lua
     * local takenObject = container.takeObject({
     *     position = {x = 0, y = 5, z = 0},
     * })
     * takenObject.highlightOn('Blue')
     * ```lua
     *
     * @example Advanced example
     *
     * Take an object out of a container, and then apply an upward force (impulse) shooting it into the air.
     * We can only apply an impulse to an object once its (underlying rigid body) has finished spawning Additionally,
     * freshly spawned objects are frozen in place for a single frame. So we need to wait for the taken object to finish
     * spawning (i.e. callback_function) then wait one more frame before applying the impulse.
     *
     * ```lua
     * container.takeObject({
     *     callback_function = function(spawnedObject)
     *         Wait.frames(function()
     *             -- We've just waited a frame, which has given the object time to unfreeze.
     *             -- However, it's also given the object time to enter another container, if
     *             -- it spawned on one. Thus, we must confirm the object is not destroyed.
     *             if not spawnedObject.isDestroyed() then
     *                 spawnedObject.addForce({0, 30, 0})
     *             end
     *         end)
     *     end,
     *     smooth = false, -- Smooth moving objects cannot have forces applied to them.
     * })
     * ```
     */
    takeObject(parameters: TakeObject): TTSObject;

    /**
     * Unregisters this object for Global collision events. Returns true if the object was previously registered, false
     * otherwise.
     */
    unregisterCollisions(): boolean;
}

interface TTSObjectHideFunctions {
    /**
     * A more advanced version of setHiddenFrom(...), this function is also used to hide objects as if they were in a hand
     * zone. It allows you to identify multiple sources of "hiding" by an ID and toggle the effect on/off easily.
     *
     * This function is slightly more complicated to use for basic hiding, but allows for much easier hiding in complex
     * situations.
     *
     * @remarks
     * Tip
     *
     * Just like Objects in a hand zone, the player/s the object is hidden from can still interact/move the hidden Object.
     * It still exists to them, but is shown as a question mark or as a hidden card.
     *
     * @param id The unique name for this hiding effect. Tip: You can use descriptive tag names like "fog" or "blindness"
     * @param hidden If the hiding effect is enabled or not.
     * @param players A table containing colors to hide the Object from. Optional, an empty table (or no table) hides for
     *                everyone.
     *
     * @example
     *
     * ```lua
     * function onLoad()
     *     --Enable hide
     *     self.attachHider("hide", true, {"Blue", "White"})
     *     --Disable hide
     *     --self.attachHider("hide", false, {"Blue", "White"})
     * end
     * ```
     */
    attachHider(id: string, hidden: boolean, players?: PlayerColor[]): boolean;

    /**
     * A more advanced version of setInvisibleTo(...), this function is also used to hide objects as if they were in a
     * hidden zone. It allows you to identify multiple sources of "hiding" by an ID and toggle the effect on/off easily.
     *
     * This function is slightly more complicated to use for basic hiding, but allows for much easier hiding in complex
     * situations.
     *
     * @remarks
     * Tip
     *
     * Just like Objects in a hidden zone, the player/s the object is hidden from can still interact/move the hidden
     * Object. It still exists to them, just invisibly so.
     *
     * @param id The unique name for this hiding effect. Tip: You can use descriptive tag names like "fog" or "blindness"
     * @param hidden If the hiding effect is enabled or not.
     * @param players A table containing colors to hide the Object from. Optional, an empty table (or no table) hides for
     *                everyone.
     *
     * @example
     *
     * ```lua
     * function onLoad()
     *     --Enable hide
     *     self.attachInvisibleHider("hide", true, {"Blue", "White"})
     *     --Disable hide
     *     --self.attachInvisibleHider("hide", false, {"Blue", "White"})
     * end
     * ```
     */
    attachInvisibleHider(id: string, hidden: boolean, players: PlayerColor[]): boolean;
    /**
     * Hides the Object from the specified players, as if it were in a hand zone.
     *
     * Using an empty table will cause the Object to remove the hiding effect.
     *
     * @remarks
     * Tip
     *
     * Just like Objects in a hand zone, the player/s the object is hidden from can still interact/move the hidden Object.
     * It still exists to them, but is shown as a question mark or as a hidden card.
     *
     * @param players A table containing colors to hide the Object from.
     *
     * @example
     *
     * ```lua
     * function onLoad()
     *     self.setHiddenFrom({"Blue", "White"})
     * end
     * ```
     */
    setHiddenFrom(players: PlayerColor[]): boolean;

    /**
     * Hides the Object from the specified players, as if it were in a hidden zone.
     *
     * Using an empty table will cause the Object to remove the hiding effect.
     *
     * @remarks
     * Tip
     *
     * Just like Objects in a hidden zone, the player/s the object is hidden from can still interact/move the hidden
     * Object. It still exists to them, just invisibly so.
     *
     * @param players A table containing colors to hide the Object from
     */
    setInvisibleTo(players: PlayerColor[]): boolean;
}

interface FogOfWarSettings {
    reveal: boolean;
    color: PlayerColor | "All";
    /** How far from the Object the reveal effect reaches (radius, inches). */
    range: float;
}

// TODO
interface Joint {
    type: JoinType;
    joint_object_guid: GUID;
    collision: boolean;
    break_force: float;
    break_torgue: float;
    axis?: VectorNumeric;
    anchor?: VectorNumeric;
    connector_anchor?: VectorNumeric;
}

type JoinType = "Fixed" | "Hinge" | "Spring";

interface FixedJoint extends Joint {}

interface SpringJoint extends Joint {
    /**
     * @defaultValue 10
     */
    spring?: float;
    /**
     * @defaultValue 0.2
     */
    damper?: float;
}

interface HingeJoint extends Joint {
    motor_force?: float;
    motor_velocity?: float;
    motor_free_spin?: boolean;
    max_distance?: float;
    min_distance?: float;
}

type ContextMenuHandler = (playerColor: PlayerColor) => unknown;

type TakeObjectParameters = TakeObjectByIndex | TakeObjectByGuid;

interface TakeObject {
    /** A Vector of the position to place Object. Optional, defaults to container's position + 2 on the x axis. */
    position?: VectorShape;
    /** A Vector of the rotation of the Object. Optional, defaults to the container's rotation. */
    rotation?: VectorShape;
    /**
     * If the Object is flipped over. Optional, defaults to false. Only used with decks, not bags/stacks. If rotation
     * is used, flip's Bool will be ignored.
     */
    flip?: boolean;
    /** If an object is taken from the top (vs bottom). Optional, defaults to true. */
    top?: boolean;
    /** If the taken Object moves smoothly or instantly. Optional, defaults to true. */
    smooth?: boolean;
    /**
     * Callback which will be called when the taken object has finished spawnning. Optional, no default. This function
     * takes a single parameter: the object that was taken.
     */
    callback_function?: ObjectCallback;
}

interface TakeObjectByIndex extends TakeObject {
    /** Index of the Object to take. Optional, no default. Only use index or guid, never both. */
    index: int;
}

interface TakeObjectByGuid extends TakeObject {
    /** GUID of the Object to take. Optional, no default. Only use index or guid, never both. */
    guid: GUID;
}

interface Decal {
    /** The name of the decal being placed. */
    name: string;
    /** The file path or URL for the image to be displayed. */
    url: string;
    /** Position to place Object. */
    position: VectorShape;
    /** Rotation of the Object. */
    rotation: VectorShape;
    /** How the image is scaled. 1 is normal scale, 0.5 would be half sized, 2 would be twice as large, etc. */
    scale: Vector;
}

interface SnapPoint {
    /** Local Position of the snap point. When attached to an object, position is relative to the object's center. */
    position: VectorShape;
    /** Local Rotation of the snap point. When attached to an object, rotation is relative to the object's rotation. */
    rotation: VectorShape;
    /** Whether the snap point is a rotation snap point. */
    rotation_snap: boolean;
    /** Table of representing the tags associated with the snap point. */
    tags: string[];
}

interface VectorLine {
    /** Table containing Vector positions for each "point" on the line. */
    points: VectorShape[];
    /** Color the line will be. Optional, defaults to {1,1,1}. */
    color: ColorValue;
    /** How thick the line is (in Unity units). Optional, defaults to default line size (0.1). */
    thickness: float;
    /** Rotation Vector for the line to be angled. Optional, defaults to {0,0,0}. */
    rotation: VectorShape;
}

interface Bounds {
    /** The Vector of the center of the bounding box. */
    center: Vector;
    /** The Vector of the size of the bounding box. */
    size: Vector;
    /** The Vector of the offset of the center of the bounding box from the middle of the Object model. */
    offset: Vector;
}

interface ObjectInfo {
    /** description Description of the contained object. */
    description: string;
    /** gm_notes GM Notes on the contained object. */
    gm_notes: string;
    /** GUID of the contained object. */
    guid: GUID;
    /** Lua script on the contained object. */
    lua_script: string;
    /** Lua script saved state of the contained object. */
    lua_script_state: string;
    /**  Memo on the contained object. */
    memo: string;
    /**
     * Name of the contained object. Will correspond with getName(), unless it's blank, in which case it'll be the
     * internal resource name.
     */
    name: string;
    /** A table of  representing the tags on the contained object. */
    tags: string[];
}

interface ContainedObjectInfo extends ObjectInfo {
    /** Index of the contained object, represents the item's order in the container. */
    index: int;
}

interface StateInfo extends ObjectInfo {
    /** Index of the item, represents the item's order in the states. */
    id: int;
}

type ObjectCallback = (object: TTSObject) => unknown;
